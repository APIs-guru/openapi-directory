import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRouteCalculatorPathParams extends SpeakeasyBase {
    calculatorName: string;
}
export declare class UpdateRouteCalculatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateRouteCalculatorRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class UpdateRouteCalculatorRequestBody extends SpeakeasyBase {
    description?: string;
    pricingPlan?: UpdateRouteCalculatorRequestBodyPricingPlanEnum;
}
export declare class UpdateRouteCalculatorRequest extends SpeakeasyBase {
    pathParams: UpdateRouteCalculatorPathParams;
    headers: UpdateRouteCalculatorHeaders;
    request: UpdateRouteCalculatorRequestBody;
}
export declare class UpdateRouteCalculatorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateRouteCalculatorResponse?: shared.UpdateRouteCalculatorResponse;
    validationException?: any;
}
