import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFindingsFilterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateFindingsFilterHeaders extends SpeakeasyBase {
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

export enum UpdateFindingsFilterRequestBodyActionEnum {
    Archive = "ARCHIVE"
,    Noop = "NOOP"
}


// UpdateFindingsFilterRequestBodyFindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class UpdateFindingsFilterRequestBodyFindingCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties })
  criterion?: Map<string, shared.CriterionAdditionalProperties>;
}


export class UpdateFindingsFilterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: UpdateFindingsFilterRequestBodyActionEnum;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=findingCriteria" })
  findingCriteria?: UpdateFindingsFilterRequestBodyFindingCriteria;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;
}


export class UpdateFindingsFilterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFindingsFilterPathParams;

  @Metadata()
  headers: UpdateFindingsFilterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFindingsFilterRequestBody;
}


export class UpdateFindingsFilterResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

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
  updateFindingsFilterResponse?: shared.UpdateFindingsFilterResponse;

  @Metadata()
  validationException?: any;
}
