import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLongTermPricingXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCreateLongTermPricing = "AWSIESnowballJobManagementService.CreateLongTermPricing"
}
export declare class CreateLongTermPricingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLongTermPricingXAmzTargetEnum;
}
export declare class CreateLongTermPricingRequest extends SpeakeasyBase {
    headers: CreateLongTermPricingHeaders;
    request: shared.CreateLongTermPricingRequest;
}
export declare class CreateLongTermPricingResponse extends SpeakeasyBase {
    contentType: string;
    createLongTermPricingResult?: shared.CreateLongTermPricingResult;
    invalidResourceException?: any;
    statusCode: number;
}
