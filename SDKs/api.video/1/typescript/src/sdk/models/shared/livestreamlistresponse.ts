import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveStream } from "./livestream";
import { Pagination } from "./pagination";



export class LiveStreamListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: LiveStream })
  data: LiveStream[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: Pagination;
}
