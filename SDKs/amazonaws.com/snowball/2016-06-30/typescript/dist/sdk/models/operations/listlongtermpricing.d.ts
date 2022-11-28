import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLongTermPricingXAmzTargetEnum {
    AwsieSnowballJobManagementServiceListLongTermPricing = "AWSIESnowballJobManagementService.ListLongTermPricing"
}
export declare class ListLongTermPricingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLongTermPricingXAmzTargetEnum;
}
export declare class ListLongTermPricingRequest extends SpeakeasyBase {
    headers: ListLongTermPricingHeaders;
    request: shared.ListLongTermPricingRequest;
}
export declare class ListLongTermPricingResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidResourceException?: any;
    listLongTermPricingResult?: shared.ListLongTermPricingResult;
    statusCode: number;
}
