import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJournalEntriesPathParams extends SpeakeasyBase {
    telephonyConversationId: string;
}
export declare enum GetJournalEntriesDirectionEnum {
    After = "AFTER",
    Before = "BEFORE",
    Both = "BOTH"
}
export declare enum GetJournalEntriesJournalFilterEnum {
    All = "ALL",
    Missed = "MISSED",
    Dialed = "DIALED",
    Received = "RECEIVED",
    Diverted = "DIVERTED",
    Voicemails = "VOICEMAILS",
    UnheradVoicemails = "UNHERAD_VOICEMAILS"
}
export declare class GetJournalEntriesQueryParams extends SpeakeasyBase {
    direction?: GetJournalEntriesDirectionEnum;
    journalFilter?: GetJournalEntriesJournalFilterEnum;
    numberOfEntries?: number;
    timestamp?: number;
}
export declare class GetJournalEntriesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetJournalEntriesRequest extends SpeakeasyBase {
    pathParams: GetJournalEntriesPathParams;
    queryParams: GetJournalEntriesQueryParams;
    security: GetJournalEntriesSecurity;
}
export declare class GetJournalEntriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationItems?: any[];
    statusCode: number;
}
