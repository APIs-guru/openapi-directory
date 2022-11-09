import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BalanceGetResponse extends SpeakeasyBase {
  @Metadata()
  balanceGet500ApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
