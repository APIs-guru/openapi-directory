import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UploadToken } from "./uploadtoken";
import { Pagination } from "./pagination";


export class TokenListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.UploadToken })
  data: UploadToken[];

  @Metadata({ data: "json, name=pagination" })
  pagination: Pagination;
}
