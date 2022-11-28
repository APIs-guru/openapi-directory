import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAssetModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAssetModelRequestBody extends SpeakeasyBase {
    assetModelCompositeModels?: shared.AssetModelCompositeModelDefinition[];
    assetModelDescription?: string;
    assetModelHierarchies?: shared.AssetModelHierarchyDefinition[];
    assetModelName: string;
    assetModelProperties?: shared.AssetModelPropertyDefinition[];
    clientToken?: string;
    tags?: Map<string, string>;
}
export declare class CreateAssetModelRequest extends SpeakeasyBase {
    headers: CreateAssetModelHeaders;
    request: CreateAssetModelRequestBody;
}
export declare class CreateAssetModelResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    createAssetModelResponse?: shared.CreateAssetModelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
