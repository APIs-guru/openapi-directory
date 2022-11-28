import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvCurrentSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelAtPeriodEnd" })
  cancelAtPeriodEnd: boolean;

  @SpeakeasyMetadata({ data: "json, name=collectionMethod" })
  collectionMethod: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=currentPeriodEnd" })
  currentPeriodEnd: number;

  @SpeakeasyMetadata({ data: "json, name=currentPeriodStart" })
  currentPeriodStart: number;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
