import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoSession } from "./videosession";
import { Pagination } from "./pagination";


export class RawStatisticsListSessionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.VideoSession })
  data?: VideoSession[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
