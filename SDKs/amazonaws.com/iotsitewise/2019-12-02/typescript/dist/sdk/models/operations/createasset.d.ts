import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAssetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAssetRequestBody extends SpeakeasyBase {
    assetModelId: string;
    assetName: string;
    clientToken?: string;
    tags?: Map<string, string>;
}
export declare class CreateAssetRequest extends SpeakeasyBase {
    headers: CreateAssetHeaders;
    request: CreateAssetRequestBody;
}
export declare class CreateAssetResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    createAssetResponse?: shared.CreateAssetResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
