import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureMailboxAutoReplyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class ConfigureMailboxAutoReplyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class ConfigureMailboxAutoReplyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureMailboxAutoReplyPathParams;

  @Metadata()
  queryParams: ConfigureMailboxAutoReplyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AutoReply;
}


export class ConfigureMailboxAutoReplyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
