import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateRouteCalculatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateRouteCalculatorRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class CreateRouteCalculatorRequestBody extends SpeakeasyBase {
    calculatorName: string;
    dataSource: string;
    description?: string;
    pricingPlan: CreateRouteCalculatorRequestBodyPricingPlanEnum;
    tags?: Map<string, string>;
}
export declare class CreateRouteCalculatorRequest extends SpeakeasyBase {
    headers: CreateRouteCalculatorHeaders;
    request: CreateRouteCalculatorRequestBody;
}
export declare class CreateRouteCalculatorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createRouteCalculatorResponse?: shared.CreateRouteCalculatorResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
