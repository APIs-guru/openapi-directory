import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMailboxPathParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class GetMailboxQueryParams extends SpeakeasyBase {
    mailboxName: string;
}
export declare class GetMailboxRequest extends SpeakeasyBase {
    pathParams: GetMailboxPathParams;
    queryParams: GetMailboxQueryParams;
}
export declare class GetMailboxResponse extends SpeakeasyBase {
    contentType: string;
    mailboxDetail?: shared.MailboxDetail;
    statusCode: number;
}
