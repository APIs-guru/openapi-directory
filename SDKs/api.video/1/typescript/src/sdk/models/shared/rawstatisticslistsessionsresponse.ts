import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoSession } from "./videosession";
import { Pagination } from "./pagination";



export class RawStatisticsListSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: VideoSession })
  data?: VideoSession[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
