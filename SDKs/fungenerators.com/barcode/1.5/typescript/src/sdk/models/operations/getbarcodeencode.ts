import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBarcodeEncodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=barcodeformat" })
  barcodeformat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputformat" })
  outputformat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=totalheight" })
  totalheight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=widthfactor" })
  widthfactor?: number;
}


export class GetBarcodeEncodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetBarcodeEncodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBarcodeEncodeQueryParams;

  @Metadata()
  security: GetBarcodeEncodeSecurity;
}


export class GetBarcodeEncodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
