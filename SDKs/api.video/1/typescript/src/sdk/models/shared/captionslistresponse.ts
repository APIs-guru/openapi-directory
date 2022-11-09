import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subtitle } from "./subtitle";
import { Pagination } from "./pagination";


export class CaptionsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Subtitle })
  data?: Subtitle[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
