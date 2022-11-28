import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEligibleOffersQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetEligibleOffersRequest extends SpeakeasyBase {
    queryParams: GetEligibleOffersQueryParams;
    request: shared.EeOffersRequest;
}
export declare class GetEligibleOffersResponse extends SpeakeasyBase {
    contentType: string;
    eeOffersResponse?: shared.EeOffersResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
