import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountGetGuestsCountQueryParams extends SpeakeasyBase {
    textSearch?: string;
}
export declare class AccountGetGuestsCountRequest extends SpeakeasyBase {
    queryParams: AccountGetGuestsCountQueryParams;
}
export declare class AccountGetGuestsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
