import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemSummary } from "./itemsummary";
import { ItemSummary } from "./itemsummary";
import { ItemSummary } from "./itemsummary";


export class ContinueWatchingListDataExpansion extends SpeakeasyBase {
  @Metadata({ data: "json, name=episode" })
  episode?: ItemSummary;

  @Metadata({ data: "json, name=season" })
  season?: ItemSummary;

  @Metadata({ data: "json, name=show" })
  show?: ItemSummary;
}
