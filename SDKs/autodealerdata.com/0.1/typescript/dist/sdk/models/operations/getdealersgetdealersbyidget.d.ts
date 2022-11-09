import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDealersGetDealersByIdGetQueryParams extends SpeakeasyBase {
    dealerId: number;
    jwt: string;
}
export declare class GetDealersGetDealersByIdGetRequest extends SpeakeasyBase {
    queryParams: GetDealersGetDealersByIdGetQueryParams;
}
export declare class GetDealersGetDealersByIdGetResponse extends SpeakeasyBase {
    contentType: string;
    dealershipDataResp?: shared.DealershipDataResp;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
