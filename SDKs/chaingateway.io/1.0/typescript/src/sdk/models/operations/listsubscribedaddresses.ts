import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSubscribedAddressesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class ListSubscribedAddressesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListSubscribedAddressesHeaders;
}


export class ListSubscribedAddressesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listSubscribedAddresses?: shared.ListSubscribedAddresses;
}
