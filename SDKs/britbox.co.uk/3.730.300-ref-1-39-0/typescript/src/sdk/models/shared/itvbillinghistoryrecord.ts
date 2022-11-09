import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvBillingHistoryRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=card" })
  card: Map<string, any>;

  @Metadata({ data: "json, name=charge" })
  charge: Map<string, any>;

  @Metadata({ data: "json, name=invoice" })
  invoice: Map<string, any>;

  @Metadata({ data: "json, name=subscription" })
  subscription: Map<string, any>;
}
