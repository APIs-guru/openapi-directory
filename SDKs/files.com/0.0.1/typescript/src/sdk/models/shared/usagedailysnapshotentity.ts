import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UsageDailySnapshotEntity
/** 
 * List Usage Daily Snapshots
**/
export class UsageDailySnapshotEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_storage" })
  currentStorage?: number;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=usage_by_top_level_dir" })
  usageByTopLevelDir?: any[];
}
