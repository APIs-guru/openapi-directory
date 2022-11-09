import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveLayerVersionPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LayerName" })
  layerName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=StatementId" })
  statementId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=VersionNumber" })
  versionNumber: number;
}


export class RemoveLayerVersionPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=RevisionId" })
  revisionId?: string;
}


export class RemoveLayerVersionPermissionHeaders extends SpeakeasyBase {
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


export class RemoveLayerVersionPermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveLayerVersionPermissionPathParams;

  @Metadata()
  queryParams: RemoveLayerVersionPermissionQueryParams;

  @Metadata()
  headers: RemoveLayerVersionPermissionHeaders;
}


export class RemoveLayerVersionPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
