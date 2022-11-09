import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateWorldGenerationJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateWorldGenerationJobRequestBodyWorldCount
/** 
 * <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
**/
export class CreateWorldGenerationJobRequestBodyWorldCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=floorplanCount" })
  floorplanCount?: number;

  @Metadata({ data: "json, name=interiorCountPerFloorplan" })
  interiorCountPerFloorplan?: number;
}


export class CreateWorldGenerationJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=template" })
  template: string;

  @Metadata({ data: "json, name=worldCount" })
  worldCount: CreateWorldGenerationJobRequestBodyWorldCount;

  @Metadata({ data: "json, name=worldTags" })
  worldTags?: Map<string, string>;
}


export class CreateWorldGenerationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateWorldGenerationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateWorldGenerationJobRequestBody;
}


export class CreateWorldGenerationJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createWorldGenerationJobResponse?: shared.CreateWorldGenerationJobResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
