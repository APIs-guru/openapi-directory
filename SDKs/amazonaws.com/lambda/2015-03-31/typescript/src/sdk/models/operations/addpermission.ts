import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class AddPermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier?: string;
}


export class AddPermissionHeaders extends SpeakeasyBase {
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


export class AddPermissionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: string;

  @SpeakeasyMetadata({ data: "json, name=EventSourceToken" })
  eventSourceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal: string;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceAccount" })
  sourceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StatementId" })
  statementId: string;
}


export class AddPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddPermissionPathParams;

  @SpeakeasyMetadata()
  queryParams: AddPermissionQueryParams;

  @SpeakeasyMetadata()
  headers: AddPermissionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddPermissionRequestBody;
}


export class AddPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addPermissionResponse?: shared.AddPermissionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  policyLengthExceededException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
