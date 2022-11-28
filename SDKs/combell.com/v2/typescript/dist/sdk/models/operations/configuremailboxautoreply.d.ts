import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureMailboxAutoReplyPathParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class ConfigureMailboxAutoReplyQueryParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class ConfigureMailboxAutoReplyRequest extends SpeakeasyBase {
    pathParams: ConfigureMailboxAutoReplyPathParams;
    queryParams: ConfigureMailboxAutoReplyQueryParams;
    request?: shared.AutoReply;
}
export declare class ConfigureMailboxAutoReplyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
