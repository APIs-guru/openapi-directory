import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMailboxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class DeleteMailboxQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class DeleteMailboxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMailboxPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteMailboxQueryParams;
}


export class DeleteMailboxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
