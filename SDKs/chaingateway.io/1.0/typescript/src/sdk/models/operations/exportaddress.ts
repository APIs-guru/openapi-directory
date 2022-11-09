import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportAddressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class ExportAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExportAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExportAddressRequest;
}


export class ExportAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportAddress?: shared.ExportAddress;
}
