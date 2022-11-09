import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostBlockedNumbersSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostBlockedNumbersRequest extends SpeakeasyBase {
    request: string[];
    security: PostBlockedNumbersSecurity;
}
export declare class PostBlockedNumbersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
