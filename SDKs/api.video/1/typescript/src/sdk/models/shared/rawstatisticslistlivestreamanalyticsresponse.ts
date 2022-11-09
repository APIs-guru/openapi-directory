import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LiveStreamSession } from "./livestreamsession";
import { Pagination } from "./pagination";


export class RawStatisticsListLiveStreamAnalyticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.LiveStreamSession })
  data?: LiveStreamSession[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
