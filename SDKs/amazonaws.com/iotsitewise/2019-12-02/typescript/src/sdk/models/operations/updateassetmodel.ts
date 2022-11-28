import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAssetModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assetModelId" })
  assetModelId: string;
}


export class UpdateAssetModelHeaders extends SpeakeasyBase {
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


export class UpdateAssetModelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetModelCompositeModels", elemType: shared.AssetModelCompositeModel })
  assetModelCompositeModels?: shared.AssetModelCompositeModel[];

  @SpeakeasyMetadata({ data: "json, name=assetModelDescription" })
  assetModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelHierarchies", elemType: shared.AssetModelHierarchy })
  assetModelHierarchies?: shared.AssetModelHierarchy[];

  @SpeakeasyMetadata({ data: "json, name=assetModelName" })
  assetModelName: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelProperties", elemType: shared.AssetModelProperty })
  assetModelProperties?: shared.AssetModelProperty[];

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class UpdateAssetModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAssetModelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAssetModelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAssetModelRequestBody;
}


export class UpdateAssetModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingOperationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateAssetModelResponse?: shared.UpdateAssetModelResponse;
}
