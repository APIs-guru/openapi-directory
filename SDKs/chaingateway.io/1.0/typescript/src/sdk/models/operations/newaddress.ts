import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NewAddressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class NewAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: NewAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NewAddressRequest;
}


export class NewAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  newAddress?: shared.NewAddress;
}
