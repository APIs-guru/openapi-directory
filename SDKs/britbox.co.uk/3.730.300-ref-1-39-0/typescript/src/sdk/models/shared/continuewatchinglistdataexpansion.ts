import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemSummary } from "./itemsummary";



export class ContinueWatchingListDataExpansion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=episode" })
  episode?: ItemSummary;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: ItemSummary;

  @SpeakeasyMetadata({ data: "json, name=show" })
  show?: ItemSummary;
}
