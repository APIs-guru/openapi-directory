import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangedAssetDetail } from "./changedassetdetail";



export class AssetChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=change_set_id" })
  changeSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=changed_assets", elemType: ChangedAssetDetail })
  changedAssets?: ChangedAssetDetail[];
}
