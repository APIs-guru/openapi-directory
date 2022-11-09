import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClearAddressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class ClearAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: ClearAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClearAddressRequest;
}


export class ClearAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  clearAddress?: shared.ClearAddress;
}
