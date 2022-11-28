import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBarcodeEncodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=barcodeformat" })
  barcodeformat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputformat" })
  outputformat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=totalheight" })
  totalheight?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=widthfactor" })
  widthfactor?: number;
}


export class GetBarcodeEncodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetBarcodeEncodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBarcodeEncodeQueryParams;

  @SpeakeasyMetadata()
  security: GetBarcodeEncodeSecurity;
}


export class GetBarcodeEncodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
