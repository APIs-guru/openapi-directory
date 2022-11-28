import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealersGetDealersGetQueryParams extends SpeakeasyBase {
    jwt: string;
    zipCode: number;
}
export declare class GetDealersGetDealersGetRequest extends SpeakeasyBase {
    queryParams: GetDealersGetDealersGetQueryParams;
}
export declare class GetDealersGetDealersGetResponse extends SpeakeasyBase {
    contentType: string;
    dealershipDataResp?: shared.DealershipDataResp;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
