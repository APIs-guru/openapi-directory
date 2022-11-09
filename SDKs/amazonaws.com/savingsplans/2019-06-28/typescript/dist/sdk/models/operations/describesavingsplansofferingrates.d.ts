import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeSavingsPlansOfferingRatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSavingsPlansOfferingRatesRequestBody extends SpeakeasyBase {
    filters?: shared.SavingsPlanOfferingRateFilterElement[];
    maxResults?: number;
    nextToken?: string;
    operations?: string[];
    products?: shared.SavingsPlanProductTypeEnum[];
    savingsPlanOfferingIds?: string[];
    savingsPlanPaymentOptions?: shared.SavingsPlanPaymentOptionEnum[];
    savingsPlanTypes?: shared.SavingsPlanTypeEnum[];
    serviceCodes?: shared.SavingsPlanRateServiceCodeEnum[];
    usageTypes?: string[];
}
export declare class DescribeSavingsPlansOfferingRatesRequest extends SpeakeasyBase {
    headers: DescribeSavingsPlansOfferingRatesHeaders;
    request: DescribeSavingsPlansOfferingRatesRequestBody;
}
export declare class DescribeSavingsPlansOfferingRatesResponse extends SpeakeasyBase {
    contentType: string;
    describeSavingsPlansOfferingRatesResponse?: shared.DescribeSavingsPlansOfferingRatesResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
