import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3CustomersCurrentHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3CustomersCurrentRequest extends SpeakeasyBase {
    headers: GetV3CustomersCurrentHeaders;
}
export declare class GetV3CustomersCurrentResponse extends SpeakeasyBase {
    contentType: string;
    customerInfoResponse?: shared.CustomerInfoResponse;
    statusCode: number;
}
