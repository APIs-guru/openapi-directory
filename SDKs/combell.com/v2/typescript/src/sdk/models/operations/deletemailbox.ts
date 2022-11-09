import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMailboxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class DeleteMailboxQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class DeleteMailboxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMailboxPathParams;

  @Metadata()
  queryParams: DeleteMailboxQueryParams;
}


export class DeleteMailboxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
