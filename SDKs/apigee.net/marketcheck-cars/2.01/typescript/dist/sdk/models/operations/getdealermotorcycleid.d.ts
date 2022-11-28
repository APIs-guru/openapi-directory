import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealerMotorcycleIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDealerMotorcycleIdQueryParams extends SpeakeasyBase {
    apiKey?: string;
    provider?: boolean;
}
export declare class GetDealerMotorcycleIdRequest extends SpeakeasyBase {
    pathParams: GetDealerMotorcycleIdPathParams;
    queryParams: GetDealerMotorcycleIdQueryParams;
}
export declare class GetDealerMotorcycleIdResponse extends SpeakeasyBase {
    contentType: string;
    dealer?: shared.Dealer;
    error?: shared.Error;
    statusCode: number;
}
