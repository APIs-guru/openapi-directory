import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Chapter } from "./chapter";
import { Pagination } from "./pagination";


export class ChaptersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Chapter })
  data?: Chapter[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
