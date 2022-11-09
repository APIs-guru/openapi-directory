import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportAddressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class ImportAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportAddressRequest;
}


export class ImportAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  importAddress?: shared.ImportAddress;
}
