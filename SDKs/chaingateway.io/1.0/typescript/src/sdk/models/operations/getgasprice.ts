import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGasPriceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class GetGasPriceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetGasPriceHeaders;
}


export class GetGasPriceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGasPrice?: shared.GetGasPrice;
}
