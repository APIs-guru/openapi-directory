import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LiveStream } from "./livestream";
import { Pagination } from "./pagination";


export class LiveStreamListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.LiveStream })
  data: LiveStream[];

  @Metadata({ data: "json, name=pagination" })
  pagination: Pagination;
}
