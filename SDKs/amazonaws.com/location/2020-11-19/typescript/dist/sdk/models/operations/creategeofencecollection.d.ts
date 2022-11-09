import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateGeofenceCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateGeofenceCollectionRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class CreateGeofenceCollectionRequestBody extends SpeakeasyBase {
    collectionName: string;
    description?: string;
    kmsKeyId?: string;
    pricingPlan: CreateGeofenceCollectionRequestBodyPricingPlanEnum;
    pricingPlanDataSource?: string;
    tags?: Map<string, string>;
}
export declare class CreateGeofenceCollectionRequest extends SpeakeasyBase {
    headers: CreateGeofenceCollectionHeaders;
    request: CreateGeofenceCollectionRequestBody;
}
export declare class CreateGeofenceCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createGeofenceCollectionResponse?: shared.CreateGeofenceCollectionResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
