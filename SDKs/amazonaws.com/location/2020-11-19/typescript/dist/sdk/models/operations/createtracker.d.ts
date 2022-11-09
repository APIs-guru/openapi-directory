import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateTrackerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateTrackerRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class CreateTrackerRequestBody extends SpeakeasyBase {
    description?: string;
    kmsKeyId?: string;
    pricingPlan: CreateTrackerRequestBodyPricingPlanEnum;
    pricingPlanDataSource?: string;
    tags?: Map<string, string>;
    trackerName: string;
}
export declare class CreateTrackerRequest extends SpeakeasyBase {
    headers: CreateTrackerHeaders;
    request: CreateTrackerRequestBody;
}
export declare class CreateTrackerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createTrackerResponse?: shared.CreateTrackerResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
