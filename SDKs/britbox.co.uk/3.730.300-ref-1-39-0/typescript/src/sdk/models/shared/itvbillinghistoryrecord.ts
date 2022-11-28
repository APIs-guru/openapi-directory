import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvBillingHistoryRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card" })
  card: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=charge" })
  charge: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription: Map<string, any>;
}
