import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangedAssetDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_changed_utc_datetime" })
  assetChangedUtcDatetime?: Date;

  @SpeakeasyMetadata({ data: "json, name=asset_lifecycle" })
  assetLifecycle?: string;

  @SpeakeasyMetadata({ data: "json, name=asset_type" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
