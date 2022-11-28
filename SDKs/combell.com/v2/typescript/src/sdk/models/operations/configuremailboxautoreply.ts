import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureMailboxAutoReplyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class ConfigureMailboxAutoReplyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class ConfigureMailboxAutoReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureMailboxAutoReplyPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureMailboxAutoReplyQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AutoReply;
}


export class ConfigureMailboxAutoReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
