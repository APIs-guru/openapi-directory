import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
import { Pagination } from "./pagination";



export class VideosListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Video })
  data: Video[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: Pagination;
}
