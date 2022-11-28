import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeMailboxPasswordPathParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class ChangeMailboxPasswordQueryParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class ChangeMailboxPasswordRequest extends SpeakeasyBase {
    pathParams: ChangeMailboxPasswordPathParams;
    queryParams: ChangeMailboxPasswordQueryParams;
    request?: shared.UpdateMailboxPasswordRequest;
}
export declare class ChangeMailboxPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
