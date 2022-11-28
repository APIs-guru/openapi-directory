import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subtitle } from "./subtitle";
import { Pagination } from "./pagination";



export class CaptionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Subtitle })
  data?: Subtitle[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
