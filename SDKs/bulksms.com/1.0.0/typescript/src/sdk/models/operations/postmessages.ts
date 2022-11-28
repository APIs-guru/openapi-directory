import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auto-unicode" })
  autoUnicode?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deduplication-id" })
  deduplicationId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule-date" })
  scheduleDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule-description" })
  scheduleDescription?: string;
}


export class PostMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostMessagesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.SubmissionEntry })
  request: shared.SubmissionEntry[];

  @SpeakeasyMetadata()
  security: PostMessagesSecurity;
}


export class PostMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata()
  statusCode: number;
}
