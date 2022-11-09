import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddLayerVersionPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LayerName" })
  layerName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=VersionNumber" })
  versionNumber: number;
}


export class AddLayerVersionPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=RevisionId" })
  revisionId?: string;
}


export class AddLayerVersionPermissionHeaders extends SpeakeasyBase {
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


export class AddLayerVersionPermissionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId?: string;

  @Metadata({ data: "json, name=Principal" })
  principal: string;

  @Metadata({ data: "json, name=StatementId" })
  statementId: string;
}


export class AddLayerVersionPermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddLayerVersionPermissionPathParams;

  @Metadata()
  queryParams: AddLayerVersionPermissionQueryParams;

  @Metadata()
  headers: AddLayerVersionPermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddLayerVersionPermissionRequestBody;
}


export class AddLayerVersionPermissionResponse extends SpeakeasyBase {
  @Metadata()
  addLayerVersionPermissionResponse?: shared.AddLayerVersionPermissionResponse;

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
