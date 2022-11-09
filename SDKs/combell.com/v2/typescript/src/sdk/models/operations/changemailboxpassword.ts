import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeMailboxPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class ChangeMailboxPasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class ChangeMailboxPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeMailboxPasswordPathParams;

  @Metadata()
  queryParams: ChangeMailboxPasswordQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateMailboxPasswordRequest;
}


export class ChangeMailboxPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
