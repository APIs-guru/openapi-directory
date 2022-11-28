import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInboxRecipientsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    inboxId: number;
    perPage?: number;
    sortBy?: Map<string, any>;
    userId?: number;
}
export declare class GetInboxRecipientsRequest extends SpeakeasyBase {
    queryParams: GetInboxRecipientsQueryParams;
}
export declare class GetInboxRecipientsResponse extends SpeakeasyBase {
    contentType: string;
    inboxRecipientEntities?: shared.InboxRecipientEntity[];
    statusCode: number;
}
