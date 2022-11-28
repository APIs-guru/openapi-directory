import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTokenBalanceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTokenBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetTokenBalanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetTokenBalanceRequest;
}


export class GetTokenBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenBalance?: shared.GetTokenBalance;
}
