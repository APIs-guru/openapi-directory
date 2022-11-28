import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDealerQueryParams extends SpeakeasyBase {
    apiKey?: string;
    provider?: boolean;
}
export declare class GetDealerRequest extends SpeakeasyBase {
    pathParams: GetDealerPathParams;
    queryParams: GetDealerQueryParams;
}
export declare class GetDealerResponse extends SpeakeasyBase {
    contentType: string;
    dealer?: shared.Dealer;
    error?: shared.Error;
    statusCode: number;
}
