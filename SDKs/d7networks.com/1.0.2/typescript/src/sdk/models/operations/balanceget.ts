import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BalanceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  balanceGet500ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
