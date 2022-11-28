import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFindingsFilterHeaders extends SpeakeasyBase {
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

export enum CreateFindingsFilterRequestBodyActionEnum {
    Archive = "ARCHIVE",
    Noop = "NOOP"
}


// CreateFindingsFilterRequestBodyFindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class CreateFindingsFilterRequestBodyFindingCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties })
  criterion?: Map<string, shared.CriterionAdditionalProperties>;
}


export class CreateFindingsFilterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateFindingsFilterRequestBodyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=findingCriteria" })
  findingCriteria: CreateFindingsFilterRequestBodyFindingCriteria;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateFindingsFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFindingsFilterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateFindingsFilterRequestBody;
}


export class CreateFindingsFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createFindingsFilterResponse?: shared.CreateFindingsFilterResponse;

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
  validationException?: any;
}
