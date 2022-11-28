import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessagesSendQueryParams extends SpeakeasyBase {
    body: string;
    deduplicationId?: number;
    to: string;
}
export declare class GetMessagesSendSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetMessagesSendRequest extends SpeakeasyBase {
    queryParams: GetMessagesSendQueryParams;
    security: GetMessagesSendSecurity;
}
export declare class GetMessagesSendResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    messages?: shared.Message[];
    statusCode: number;
}
