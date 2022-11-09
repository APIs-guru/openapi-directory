import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PostApiV1DonationsCreateFundingSourceEnum {
    Merchant = "merchant",
    Customer = "customer"
}
export declare class PostApiV1DonationsCreateQueryParams extends SpeakeasyBase {
    amount: string;
    fundingSource: PostApiV1DonationsCreateFundingSourceEnum;
    nonprofitId: string;
    zipCode?: string;
}
export declare class PostApiV1DonationsCreateSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostApiV1DonationsCreateRequest extends SpeakeasyBase {
    queryParams: PostApiV1DonationsCreateQueryParams;
    security: PostApiV1DonationsCreateSecurity;
}
export declare class PostApiV1DonationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
