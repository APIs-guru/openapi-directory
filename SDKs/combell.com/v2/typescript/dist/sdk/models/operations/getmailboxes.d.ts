import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMailboxesQueryParams extends SpeakeasyBase {
    domainName?: string;
}
export declare class GetMailboxesRequest extends SpeakeasyBase {
    queryParams: GetMailboxesQueryParams;
}
export declare class GetMailboxesResponse extends SpeakeasyBase {
    contentType: string;
    mailboxes?: shared.Mailbox[];
    statusCode: number;
}
