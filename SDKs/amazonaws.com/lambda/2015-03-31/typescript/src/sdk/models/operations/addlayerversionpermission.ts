import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddLayerVersionPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LayerName" })
  layerName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=VersionNumber" })
  versionNumber: number;
}


export class AddLayerVersionPermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RevisionId" })
  revisionId?: string;
}


export class AddLayerVersionPermissionHeaders extends SpeakeasyBase {
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


export class AddLayerVersionPermissionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal: string;

  @SpeakeasyMetadata({ data: "json, name=StatementId" })
  statementId: string;
}


export class AddLayerVersionPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddLayerVersionPermissionPathParams;

  @SpeakeasyMetadata()
  queryParams: AddLayerVersionPermissionQueryParams;

  @SpeakeasyMetadata()
  headers: AddLayerVersionPermissionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddLayerVersionPermissionRequestBody;
}


export class AddLayerVersionPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addLayerVersionPermissionResponse?: shared.AddLayerVersionPermissionResponse;

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
