import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RolloutPercentageItemModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
