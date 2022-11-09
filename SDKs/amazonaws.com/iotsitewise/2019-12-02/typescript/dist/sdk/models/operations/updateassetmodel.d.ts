import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAssetModelPathParams extends SpeakeasyBase {
    assetModelId: string;
}
export declare class UpdateAssetModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAssetModelRequestBody extends SpeakeasyBase {
    assetModelCompositeModels?: shared.AssetModelCompositeModel[];
    assetModelDescription?: string;
    assetModelHierarchies?: shared.AssetModelHierarchy[];
    assetModelName: string;
    assetModelProperties?: shared.AssetModelProperty[];
    clientToken?: string;
}
export declare class UpdateAssetModelRequest extends SpeakeasyBase {
    pathParams: UpdateAssetModelPathParams;
    headers: UpdateAssetModelHeaders;
    request: UpdateAssetModelRequestBody;
}
export declare class UpdateAssetModelResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateAssetModelResponse?: shared.UpdateAssetModelResponse;
}
