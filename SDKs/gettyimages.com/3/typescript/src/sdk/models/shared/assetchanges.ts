import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChangedAssetDetail } from "./changedassetdetail";


export class AssetChanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=change_set_id" })
  changeSetId?: string;

  @Metadata({ data: "json, name=changed_assets", elemType: shared.ChangedAssetDetail })
  changedAssets?: ChangedAssetDetail[];
}
