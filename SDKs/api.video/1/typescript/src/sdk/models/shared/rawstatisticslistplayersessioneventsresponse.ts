import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerSessionEvent } from "./playersessionevent";
import { Pagination } from "./pagination";


export class RawStatisticsListPlayerSessionEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PlayerSessionEvent })
  data?: PlayerSessionEvent[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
