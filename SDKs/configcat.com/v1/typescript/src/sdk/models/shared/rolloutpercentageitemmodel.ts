import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RolloutPercentageItemModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentage" })
  percentage: number;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
