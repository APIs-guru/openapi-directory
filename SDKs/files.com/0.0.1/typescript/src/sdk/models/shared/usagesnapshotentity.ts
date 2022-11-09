import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UsageSnapshotEntity
/** 
 * List Usage Snapshots
**/
export class UsageSnapshotEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=current_storage" })
  currentStorage?: number;

  @Metadata({ data: "json, name=deleted_files_counted_in_minimum" })
  deletedFilesCountedInMinimum?: number;

  @Metadata({ data: "json, name=deleted_files_storage" })
  deletedFilesStorage?: number;

  @Metadata({ data: "json, name=end_at" })
  endAt?: Date;

  @Metadata({ data: "json, name=high_water_storage" })
  highWaterStorage?: number;

  @Metadata({ data: "json, name=high_water_user_count" })
  highWaterUserCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=root_storage" })
  rootStorage?: number;

  @Metadata({ data: "json, name=start_at" })
  startAt?: Date;

  @Metadata({ data: "json, name=total_downloads" })
  totalDownloads?: number;

  @Metadata({ data: "json, name=total_uploads" })
  totalUploads?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=usage_by_top_level_dir" })
  usageByTopLevelDir?: Map<string, any>;
}
