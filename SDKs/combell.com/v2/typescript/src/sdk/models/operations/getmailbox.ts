import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMailboxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class GetMailboxQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class GetMailboxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMailboxPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMailboxQueryParams;
}


export class GetMailboxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  mailboxDetail?: shared.MailboxDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}
