import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveLayerVersionPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LayerName" })
  layerName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=StatementId" })
  statementId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=VersionNumber" })
  versionNumber: number;
}


export class RemoveLayerVersionPermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RevisionId" })
  revisionId?: string;
}


export class RemoveLayerVersionPermissionHeaders extends SpeakeasyBase {
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


export class RemoveLayerVersionPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveLayerVersionPermissionPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveLayerVersionPermissionQueryParams;

  @SpeakeasyMetadata()
  headers: RemoveLayerVersionPermissionHeaders;
}


export class RemoveLayerVersionPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
