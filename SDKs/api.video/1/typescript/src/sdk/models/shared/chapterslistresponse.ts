import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Chapter } from "./chapter";
import { Pagination } from "./pagination";



export class ChaptersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Chapter })
  data?: Chapter[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
