import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerSessionEvent } from "./playersessionevent";
import { Pagination } from "./pagination";



export class RawStatisticsListPlayerSessionEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: PlayerSessionEvent })
  data?: PlayerSessionEvent[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
