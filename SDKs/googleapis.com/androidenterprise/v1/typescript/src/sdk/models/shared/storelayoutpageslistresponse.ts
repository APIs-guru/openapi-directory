import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorePage } from "./storepage";



export class StoreLayoutPagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page", elemType: StorePage })
  page?: StorePage[];
}
