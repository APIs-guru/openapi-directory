import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccountBalanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailableBalance" })
  availableBalance?: string;

  @Metadata({ data: "json, name=OnHoldBalance" })
  onHoldBalance?: string;
}
