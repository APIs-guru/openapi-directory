import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvCurrentSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelAtPeriodEnd" })
  cancelAtPeriodEnd: boolean;

  @Metadata({ data: "json, name=collectionMethod" })
  collectionMethod: string;

  @Metadata({ data: "json, name=created" })
  created: number;

  @Metadata({ data: "json, name=currentPeriodEnd" })
  currentPeriodEnd: number;

  @Metadata({ data: "json, name=currentPeriodStart" })
  currentPeriodStart: number;

  @Metadata({ data: "json, name=plan" })
  plan: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status: string;
}
