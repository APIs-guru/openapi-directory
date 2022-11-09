import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAssetPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class UpdateAssetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAssetRequestBody extends SpeakeasyBase {
    assetName: string;
    clientToken?: string;
}
export declare class UpdateAssetRequest extends SpeakeasyBase {
    pathParams: UpdateAssetPathParams;
    headers: UpdateAssetHeaders;
    request: UpdateAssetRequestBody;
}
export declare class UpdateAssetResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateAssetResponse?: shared.UpdateAssetResponse;
}
