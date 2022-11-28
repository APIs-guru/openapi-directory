import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateAssetPropertyPathParams extends SpeakeasyBase {
    assetId: string;
    propertyId: string;
}
export declare class UpdateAssetPropertyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateAssetPropertyRequestBody extends SpeakeasyBase {
    clientToken?: string;
    propertyAlias?: string;
    propertyNotificationState?: UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum;
}
export declare class UpdateAssetPropertyRequest extends SpeakeasyBase {
    pathParams: UpdateAssetPropertyPathParams;
    headers: UpdateAssetPropertyHeaders;
    request: UpdateAssetPropertyRequestBody;
}
export declare class UpdateAssetPropertyResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
