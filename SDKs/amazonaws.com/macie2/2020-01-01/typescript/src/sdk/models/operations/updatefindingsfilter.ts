import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFindingsFilterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateFindingsFilterHeaders extends SpeakeasyBase {
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

export enum UpdateFindingsFilterRequestBodyActionEnum {
    Archive = "ARCHIVE",
    Noop = "NOOP"
}


// UpdateFindingsFilterRequestBodyFindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class UpdateFindingsFilterRequestBodyFindingCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties })
  criterion?: Map<string, shared.CriterionAdditionalProperties>;
}


export class UpdateFindingsFilterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: UpdateFindingsFilterRequestBodyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=findingCriteria" })
  findingCriteria?: UpdateFindingsFilterRequestBodyFindingCriteria;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;
}


export class UpdateFindingsFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFindingsFilterPathParams;

  @SpeakeasyMetadata()
  headers: UpdateFindingsFilterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFindingsFilterRequestBody;
}


export class UpdateFindingsFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateFindingsFilterResponse?: shared.UpdateFindingsFilterResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
