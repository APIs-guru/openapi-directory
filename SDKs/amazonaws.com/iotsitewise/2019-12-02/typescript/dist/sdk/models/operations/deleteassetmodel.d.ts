import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAssetModelPathParams extends SpeakeasyBase {
    assetModelId: string;
}
export declare class DeleteAssetModelQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeleteAssetModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAssetModelRequest extends SpeakeasyBase {
    pathParams: DeleteAssetModelPathParams;
    queryParams: DeleteAssetModelQueryParams;
    headers: DeleteAssetModelHeaders;
}
export declare class DeleteAssetModelResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    deleteAssetModelResponse?: shared.DeleteAssetModelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
