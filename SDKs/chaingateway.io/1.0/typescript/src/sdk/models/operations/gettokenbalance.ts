import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTokenBalanceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTokenBalanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTokenBalanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTokenBalanceRequest;
}


export class GetTokenBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenBalance?: shared.GetTokenBalance;
}
