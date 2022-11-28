import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsageDailySnapshotEntity
/** 
 * List Usage Daily Snapshots
**/
export class UsageDailySnapshotEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_storage" })
  currentStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=usage_by_top_level_dir" })
  usageByTopLevelDir?: any[];
}
