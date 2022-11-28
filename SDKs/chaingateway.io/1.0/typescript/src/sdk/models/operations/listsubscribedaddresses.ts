import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSubscribedAddressesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class ListSubscribedAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListSubscribedAddressesHeaders;
}


export class ListSubscribedAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSubscribedAddresses?: shared.ListSubscribedAddresses;
}
