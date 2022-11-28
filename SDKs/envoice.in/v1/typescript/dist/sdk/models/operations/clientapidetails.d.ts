import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClientApiDetailsQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class ClientApiDetailsHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiDetailsRequest extends SpeakeasyBase {
    queryParams: ClientApiDetailsQueryParams;
    headers: ClientApiDetailsHeaders;
}
export declare class ClientApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    clientDetailsApiModel?: shared.ClientDetailsApiModel;
    contentType: string;
    statusCode: number;
}
