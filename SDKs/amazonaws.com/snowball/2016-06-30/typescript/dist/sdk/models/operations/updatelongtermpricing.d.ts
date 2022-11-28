import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLongTermPricingXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateLongTermPricing = "AWSIESnowballJobManagementService.UpdateLongTermPricing"
}
export declare class UpdateLongTermPricingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLongTermPricingXAmzTargetEnum;
}
export declare class UpdateLongTermPricingRequest extends SpeakeasyBase {
    headers: UpdateLongTermPricingHeaders;
    request: shared.UpdateLongTermPricingRequest;
}
export declare class UpdateLongTermPricingResponse extends SpeakeasyBase {
    contentType: string;
    invalidResourceException?: any;
    statusCode: number;
    updateLongTermPricingResult?: Map<string, any>;
}
