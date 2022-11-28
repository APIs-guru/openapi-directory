import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateResourcePolicyStatementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceArn" })
  resourceArn: string;
}


export class CreateResourcePolicyStatementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expectedRevisionId" })
  expectedRevisionId?: string;
}


export class CreateResourcePolicyStatementHeaders extends SpeakeasyBase {
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

export enum CreateResourcePolicyStatementRequestBodyEffectEnum {
    Allow = "Allow",
    Deny = "Deny"
}


export class CreateResourcePolicyStatementRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: string[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: Map<string, Map<string, string>>;

  @SpeakeasyMetadata({ data: "json, name=effect" })
  effect: CreateResourcePolicyStatementRequestBodyEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=principal", elemType: shared.Principal })
  principal: shared.Principal[];

  @SpeakeasyMetadata({ data: "json, name=statementId" })
  statementId: string;
}


export class CreateResourcePolicyStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateResourcePolicyStatementPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateResourcePolicyStatementQueryParams;

  @SpeakeasyMetadata()
  headers: CreateResourcePolicyStatementHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateResourcePolicyStatementRequestBody;
}


export class CreateResourcePolicyStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createResourcePolicyStatementResponse?: shared.CreateResourcePolicyStatementResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

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
