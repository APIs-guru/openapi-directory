import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealerRvIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDealerRvIdQueryParams extends SpeakeasyBase {
    apiKey?: string;
    provider?: boolean;
}
export declare class GetDealerRvIdRequest extends SpeakeasyBase {
    pathParams: GetDealerRvIdPathParams;
    queryParams: GetDealerRvIdQueryParams;
}
export declare class GetDealerRvIdResponse extends SpeakeasyBase {
    contentType: string;
    dealer?: shared.Dealer;
    error?: shared.Error;
    statusCode: number;
}
