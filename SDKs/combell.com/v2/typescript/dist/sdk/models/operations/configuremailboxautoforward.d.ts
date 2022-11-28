import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureMailboxAutoForwardPathParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class ConfigureMailboxAutoForwardQueryParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class ConfigureMailboxAutoForwardRequest extends SpeakeasyBase {
    pathParams: ConfigureMailboxAutoForwardPathParams;
    queryParams: ConfigureMailboxAutoForwardQueryParams;
    request?: shared.AutoForward;
}
export declare class ConfigureMailboxAutoForwardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
