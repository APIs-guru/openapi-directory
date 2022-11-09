import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAddressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeleteAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteAddressRequest;
}


export class DeleteAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteAddress?: shared.DeleteAddress;
}
