import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJournalEntriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=telephonyConversationId" })
  telephonyConversationId: string;
}

export enum GetJournalEntriesDirectionEnum {
    After = "AFTER"
,    Before = "BEFORE"
,    Both = "BOTH"
}

export enum GetJournalEntriesJournalFilterEnum {
    All = "ALL"
,    Missed = "MISSED"
,    Dialed = "DIALED"
,    Received = "RECEIVED"
,    Diverted = "DIVERTED"
,    Voicemails = "VOICEMAILS"
,    UnheradVoicemails = "UNHERAD_VOICEMAILS"
}


export class GetJournalEntriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetJournalEntriesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=journalFilter" })
  journalFilter?: GetJournalEntriesJournalFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfEntries" })
  numberOfEntries?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: number;
}


export class GetJournalEntriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetJournalEntriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJournalEntriesPathParams;

  @Metadata()
  queryParams: GetJournalEntriesQueryParams;

  @Metadata()
  security: GetJournalEntriesSecurity;
}


export class GetJournalEntriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationItems?: any[];

  @Metadata()
  statusCode: number;
}
