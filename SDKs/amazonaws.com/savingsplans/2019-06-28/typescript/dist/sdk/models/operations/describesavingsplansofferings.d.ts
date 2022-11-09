import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeSavingsPlansOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum {
    Ec2 = "EC2",
    Fargate = "Fargate",
    Lambda = "Lambda",
    SageMaker = "SageMaker"
}
export declare class DescribeSavingsPlansOfferingsRequestBody extends SpeakeasyBase {
    currencies?: shared.CurrencyCodeEnum[];
    descriptions?: string[];
    durations?: number[];
    filters?: shared.SavingsPlanOfferingFilterElement[];
    maxResults?: number;
    nextToken?: string;
    offeringIds?: string[];
    operations?: string[];
    paymentOptions?: shared.SavingsPlanPaymentOptionEnum[];
    planTypes?: shared.SavingsPlanTypeEnum[];
    productType?: DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum;
    serviceCodes?: string[];
    usageTypes?: string[];
}
export declare class DescribeSavingsPlansOfferingsRequest extends SpeakeasyBase {
    headers: DescribeSavingsPlansOfferingsHeaders;
    request: DescribeSavingsPlansOfferingsRequestBody;
}
export declare class DescribeSavingsPlansOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    describeSavingsPlansOfferingsResponse?: shared.DescribeSavingsPlansOfferingsResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
