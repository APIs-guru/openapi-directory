import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGasPriceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class GetGasPriceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetGasPriceHeaders;
}


export class GetGasPriceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGasPrice?: shared.GetGasPrice;
}
