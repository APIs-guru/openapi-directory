import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class AddPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier?: string;
}


export class AddPermissionHeaders extends SpeakeasyBase {
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


export class AddPermissionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: string;

  @Metadata({ data: "json, name=EventSourceToken" })
  eventSourceToken?: string;

  @Metadata({ data: "json, name=Principal" })
  principal: string;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=SourceAccount" })
  sourceAccount?: string;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @Metadata({ data: "json, name=StatementId" })
  statementId: string;
}


export class AddPermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddPermissionPathParams;

  @Metadata()
  queryParams: AddPermissionQueryParams;

  @Metadata()
  headers: AddPermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddPermissionRequestBody;
}


export class AddPermissionResponse extends SpeakeasyBase {
  @Metadata()
  addPermissionResponse?: shared.AddPermissionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  policyLengthExceededException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
