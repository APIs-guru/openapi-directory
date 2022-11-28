import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateRelationalDatabaseFromSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseBundleId" })
  relationalDatabaseBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSnapshotName" })
  relationalDatabaseSnapshotName?: string;

  @SpeakeasyMetadata({ data: "json, name=restoreTime" })
  restoreTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceRelationalDatabaseName" })
  sourceRelationalDatabaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=useLatestRestorableTime" })
  useLatestRestorableTime?: boolean;
}
