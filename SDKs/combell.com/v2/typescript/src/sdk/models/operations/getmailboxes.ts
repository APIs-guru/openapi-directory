import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMailboxesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName?: string;
}


export class GetMailboxesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMailboxesQueryParams;
}


export class GetMailboxesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Mailbox })
  mailboxes?: shared.Mailbox[];

  @Metadata()
  statusCode: number;
}
