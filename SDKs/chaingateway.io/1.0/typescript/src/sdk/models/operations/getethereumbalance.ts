import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEthereumBalanceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEthereumBalanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetEthereumBalanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetEthereumBalanceRequest;
}


export class GetEthereumBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEthereumBalance?: shared.GetEthereumBalance;
}
