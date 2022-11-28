import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadToken } from "./uploadtoken";
import { Pagination } from "./pagination";



export class TokenListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: UploadToken })
  data: UploadToken[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: Pagination;
}
