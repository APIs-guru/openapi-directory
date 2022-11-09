import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateResourcePolicyStatementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceArn" })
  resourceArn: string;
}


export class CreateResourcePolicyStatementQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expectedRevisionId" })
  expectedRevisionId?: string;
}


export class CreateResourcePolicyStatementHeaders extends SpeakeasyBase {
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

export enum CreateResourcePolicyStatementRequestBodyEffectEnum {
    Allow = "Allow"
,    Deny = "Deny"
}


export class CreateResourcePolicyStatementRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: string[];

  @Metadata({ data: "json, name=condition" })
  condition?: Map<string, Map<string, string>>;

  @Metadata({ data: "json, name=effect" })
  effect: CreateResourcePolicyStatementRequestBodyEffectEnum;

  @Metadata({ data: "json, name=principal", elemType: shared.Principal })
  principal: shared.Principal[];

  @Metadata({ data: "json, name=statementId" })
  statementId: string;
}


export class CreateResourcePolicyStatementRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateResourcePolicyStatementPathParams;

  @Metadata()
  queryParams: CreateResourcePolicyStatementQueryParams;

  @Metadata()
  headers: CreateResourcePolicyStatementHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateResourcePolicyStatementRequestBody;
}


export class CreateResourcePolicyStatementResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createResourcePolicyStatementResponse?: shared.CreateResourcePolicyStatementResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  preconditionFailedException?: any;

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
