import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAssetModelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assetModelId" })
  assetModelId: string;
}


export class UpdateAssetModelHeaders extends SpeakeasyBase {
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


export class UpdateAssetModelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetModelCompositeModels", elemType: shared.AssetModelCompositeModel })
  assetModelCompositeModels?: shared.AssetModelCompositeModel[];

  @Metadata({ data: "json, name=assetModelDescription" })
  assetModelDescription?: string;

  @Metadata({ data: "json, name=assetModelHierarchies", elemType: shared.AssetModelHierarchy })
  assetModelHierarchies?: shared.AssetModelHierarchy[];

  @Metadata({ data: "json, name=assetModelName" })
  assetModelName: string;

  @Metadata({ data: "json, name=assetModelProperties", elemType: shared.AssetModelProperty })
  assetModelProperties?: shared.AssetModelProperty[];

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class UpdateAssetModelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAssetModelPathParams;

  @Metadata()
  headers: UpdateAssetModelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAssetModelRequestBody;
}


export class UpdateAssetModelResponse extends SpeakeasyBase {
  @Metadata()
  conflictingOperationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateAssetModelResponse?: shared.UpdateAssetModelResponse;
}
