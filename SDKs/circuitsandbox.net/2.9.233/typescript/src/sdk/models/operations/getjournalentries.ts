import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJournalEntriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=telephonyConversationId" })
  telephonyConversationId: string;
}

export enum GetJournalEntriesDirectionEnum {
    After = "AFTER",
    Before = "BEFORE",
    Both = "BOTH"
}

export enum GetJournalEntriesJournalFilterEnum {
    All = "ALL",
    Missed = "MISSED",
    Dialed = "DIALED",
    Received = "RECEIVED",
    Diverted = "DIVERTED",
    Voicemails = "VOICEMAILS",
    UnheradVoicemails = "UNHERAD_VOICEMAILS"
}


export class GetJournalEntriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetJournalEntriesDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=journalFilter" })
  journalFilter?: GetJournalEntriesJournalFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfEntries" })
  numberOfEntries?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: number;
}


export class GetJournalEntriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetJournalEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJournalEntriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetJournalEntriesQueryParams;

  @SpeakeasyMetadata()
  security: GetJournalEntriesSecurity;
}


export class GetJournalEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationItems?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
