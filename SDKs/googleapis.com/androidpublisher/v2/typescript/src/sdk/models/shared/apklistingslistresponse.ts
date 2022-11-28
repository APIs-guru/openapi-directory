import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApkListing } from "./apklisting";



export class ApkListingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata({ elemType: ApkListing })
  listings?: ApkListing[];
}
