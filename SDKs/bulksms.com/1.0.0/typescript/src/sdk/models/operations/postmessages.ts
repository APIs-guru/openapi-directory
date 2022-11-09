import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMessagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auto-unicode" })
  autoUnicode?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deduplication-id" })
  deduplicationId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=schedule-date" })
  scheduleDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=schedule-description" })
  scheduleDescription?: string;
}


export class PostMessagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostMessagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostMessagesQueryParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.SubmissionEntry })
  request: shared.SubmissionEntry[];

  @Metadata()
  security: PostMessagesSecurity;
}


export class PostMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @Metadata()
  statusCode: number;
}
