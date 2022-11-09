import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DisplaySize } from "./displaysize";


export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_type" })
  assetType?: string;

  @Metadata({ data: "json, name=date_added" })
  dateAdded?: Date;

  @Metadata({ data: "json, name=display_sizes", elemType: shared.DisplaySize })
  displaySizes?: DisplaySize[];

  @Metadata({ data: "json, name=id" })
  id?: string;
}
