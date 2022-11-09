import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangedAssetDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_changed_utc_datetime" })
  assetChangedUtcDatetime?: Date;

  @Metadata({ data: "json, name=asset_lifecycle" })
  assetLifecycle?: string;

  @Metadata({ data: "json, name=asset_type" })
  assetType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
