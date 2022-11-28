import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamSession } from "./livestreamsession";
import { Pagination } from "./pagination";



export class RawStatisticsListLiveStreamAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: LiveStreamSession })
  data?: LiveStreamSession[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
