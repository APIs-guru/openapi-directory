import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeMailboxPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class ChangeMailboxPasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class ChangeMailboxPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeMailboxPasswordPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeMailboxPasswordQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateMailboxPasswordRequest;
}


export class ChangeMailboxPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
