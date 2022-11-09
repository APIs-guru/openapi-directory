import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFindingsFilterHeaders extends SpeakeasyBase {
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

export enum CreateFindingsFilterRequestBodyActionEnum {
    Archive = "ARCHIVE"
,    Noop = "NOOP"
}


// CreateFindingsFilterRequestBodyFindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class CreateFindingsFilterRequestBodyFindingCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties })
  criterion?: Map<string, shared.CriterionAdditionalProperties>;
}


export class CreateFindingsFilterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateFindingsFilterRequestBodyActionEnum;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=findingCriteria" })
  findingCriteria: CreateFindingsFilterRequestBodyFindingCriteria;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateFindingsFilterRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFindingsFilterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFindingsFilterRequestBody;
}


export class CreateFindingsFilterResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFindingsFilterResponse?: shared.CreateFindingsFilterResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
