import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGeofenceCollectionPathParams extends SpeakeasyBase {
    collectionName: string;
}
export declare class UpdateGeofenceCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateGeofenceCollectionRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class UpdateGeofenceCollectionRequestBody extends SpeakeasyBase {
    description?: string;
    pricingPlan?: UpdateGeofenceCollectionRequestBodyPricingPlanEnum;
    pricingPlanDataSource?: string;
}
export declare class UpdateGeofenceCollectionRequest extends SpeakeasyBase {
    pathParams: UpdateGeofenceCollectionPathParams;
    headers: UpdateGeofenceCollectionHeaders;
    request: UpdateGeofenceCollectionRequestBody;
}
export declare class UpdateGeofenceCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateGeofenceCollectionResponse?: shared.UpdateGeofenceCollectionResponse;
    validationException?: any;
}
