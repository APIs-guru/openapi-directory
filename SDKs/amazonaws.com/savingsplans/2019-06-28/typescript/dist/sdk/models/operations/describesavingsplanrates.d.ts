import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeSavingsPlanRatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSavingsPlanRatesRequestBody extends SpeakeasyBase {
    filters?: shared.SavingsPlanRateFilter[];
    maxResults?: number;
    nextToken?: string;
    savingsPlanId: string;
}
export declare class DescribeSavingsPlanRatesRequest extends SpeakeasyBase {
    headers: DescribeSavingsPlanRatesHeaders;
    request: DescribeSavingsPlanRatesRequestBody;
}
export declare class DescribeSavingsPlanRatesResponse extends SpeakeasyBase {
    contentType: string;
    describeSavingsPlanRatesResponse?: shared.DescribeSavingsPlanRatesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
