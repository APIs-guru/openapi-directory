import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateTrackerPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class UpdateTrackerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateTrackerRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class UpdateTrackerRequestBody extends SpeakeasyBase {
    description?: string;
    pricingPlan?: UpdateTrackerRequestBodyPricingPlanEnum;
    pricingPlanDataSource?: string;
}
export declare class UpdateTrackerRequest extends SpeakeasyBase {
    pathParams: UpdateTrackerPathParams;
    headers: UpdateTrackerHeaders;
    request: UpdateTrackerRequestBody;
}
export declare class UpdateTrackerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateTrackerResponse?: shared.UpdateTrackerResponse;
    validationException?: any;
}
