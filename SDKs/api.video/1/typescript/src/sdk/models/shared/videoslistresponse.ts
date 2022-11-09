import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Video } from "./video";
import { Pagination } from "./pagination";


export class VideosListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Video })
  data: Video[];

  @Metadata({ data: "json, name=pagination" })
  pagination: Pagination;
}
