import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMailboxesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName?: string;
}


export class GetMailboxesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMailboxesQueryParams;
}


export class GetMailboxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Mailbox })
  mailboxes?: shared.Mailbox[];

  @SpeakeasyMetadata()
  statusCode: number;
}
