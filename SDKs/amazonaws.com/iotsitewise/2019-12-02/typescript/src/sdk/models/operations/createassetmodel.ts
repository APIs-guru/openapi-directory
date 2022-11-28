import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAssetModelHeaders extends SpeakeasyBase {
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


export class CreateAssetModelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetModelCompositeModels", elemType: shared.AssetModelCompositeModelDefinition })
  assetModelCompositeModels?: shared.AssetModelCompositeModelDefinition[];

  @SpeakeasyMetadata({ data: "json, name=assetModelDescription" })
  assetModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelHierarchies", elemType: shared.AssetModelHierarchyDefinition })
  assetModelHierarchies?: shared.AssetModelHierarchyDefinition[];

  @SpeakeasyMetadata({ data: "json, name=assetModelName" })
  assetModelName: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelProperties", elemType: shared.AssetModelPropertyDefinition })
  assetModelProperties?: shared.AssetModelPropertyDefinition[];

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateAssetModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAssetModelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAssetModelRequestBody;
}


export class CreateAssetModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingOperationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAssetModelResponse?: shared.CreateAssetModelResponse;

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
}
