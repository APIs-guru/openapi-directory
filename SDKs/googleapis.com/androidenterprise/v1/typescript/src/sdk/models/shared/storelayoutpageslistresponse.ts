import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StorePage } from "./storepage";


export class StoreLayoutPagesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=page", elemType: shared.StorePage })
  page?: StorePage[];
}
