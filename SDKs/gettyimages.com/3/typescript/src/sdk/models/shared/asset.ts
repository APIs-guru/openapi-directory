import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisplaySize } from "./displaysize";



export class Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_type" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=date_added" })
  dateAdded?: Date;

  @SpeakeasyMetadata({ data: "json, name=display_sizes", elemType: DisplaySize })
  displaySizes?: DisplaySize[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
