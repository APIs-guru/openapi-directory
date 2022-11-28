import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";



export class ListingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata({ elemType: Listing })
  listings?: Listing[];
}
