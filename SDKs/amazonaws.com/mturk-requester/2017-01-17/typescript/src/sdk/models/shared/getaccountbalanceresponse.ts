import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailableBalance" })
  availableBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=OnHoldBalance" })
  onHoldBalance?: string;
}
