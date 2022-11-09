import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAssetModelHeaders extends SpeakeasyBase {
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


export class CreateAssetModelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetModelCompositeModels", elemType: shared.AssetModelCompositeModelDefinition })
  assetModelCompositeModels?: shared.AssetModelCompositeModelDefinition[];

  @Metadata({ data: "json, name=assetModelDescription" })
  assetModelDescription?: string;

  @Metadata({ data: "json, name=assetModelHierarchies", elemType: shared.AssetModelHierarchyDefinition })
  assetModelHierarchies?: shared.AssetModelHierarchyDefinition[];

  @Metadata({ data: "json, name=assetModelName" })
  assetModelName: string;

  @Metadata({ data: "json, name=assetModelProperties", elemType: shared.AssetModelPropertyDefinition })
  assetModelProperties?: shared.AssetModelPropertyDefinition[];

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateAssetModelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAssetModelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAssetModelRequestBody;
}


export class CreateAssetModelResponse extends SpeakeasyBase {
  @Metadata()
  conflictingOperationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAssetModelResponse?: shared.CreateAssetModelResponse;

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
}
