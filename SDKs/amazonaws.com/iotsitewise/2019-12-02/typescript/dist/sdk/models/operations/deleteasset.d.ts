import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAssetPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class DeleteAssetQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeleteAssetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAssetRequest extends SpeakeasyBase {
    pathParams: DeleteAssetPathParams;
    queryParams: DeleteAssetQueryParams;
    headers: DeleteAssetHeaders;
}
export declare class DeleteAssetResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    deleteAssetResponse?: shared.DeleteAssetResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
