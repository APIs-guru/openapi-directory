import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateWorldGenerationJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateWorldGenerationJobRequestBodyWorldCount
/** 
 * <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
**/
export class CreateWorldGenerationJobRequestBodyWorldCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floorplanCount" })
  floorplanCount?: number;

  @SpeakeasyMetadata({ data: "json, name=interiorCountPerFloorplan" })
  interiorCountPerFloorplan?: number;
}


export class CreateWorldGenerationJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template: string;

  @SpeakeasyMetadata({ data: "json, name=worldCount" })
  worldCount: CreateWorldGenerationJobRequestBodyWorldCount;

  @SpeakeasyMetadata({ data: "json, name=worldTags" })
  worldTags?: Map<string, string>;
}


export class CreateWorldGenerationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWorldGenerationJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateWorldGenerationJobRequestBody;
}


export class CreateWorldGenerationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createWorldGenerationJobResponse?: shared.CreateWorldGenerationJobResponse;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
