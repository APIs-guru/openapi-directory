import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsageSnapshotEntity
/** 
 * List Usage Snapshots
**/
export class UsageSnapshotEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=current_storage" })
  currentStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=deleted_files_counted_in_minimum" })
  deletedFilesCountedInMinimum?: number;

  @SpeakeasyMetadata({ data: "json, name=deleted_files_storage" })
  deletedFilesStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=end_at" })
  endAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=high_water_storage" })
  highWaterStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=high_water_user_count" })
  highWaterUserCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=root_storage" })
  rootStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=start_at" })
  startAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_downloads" })
  totalDownloads?: number;

  @SpeakeasyMetadata({ data: "json, name=total_uploads" })
  totalUploads?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=usage_by_top_level_dir" })
  usageByTopLevelDir?: Map<string, any>;
}
