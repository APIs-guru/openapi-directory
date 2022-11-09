import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateRelationalDatabaseFromSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "json, name=relationalDatabaseBundleId" })
  relationalDatabaseBundleId?: string;

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @Metadata({ data: "json, name=relationalDatabaseSnapshotName" })
  relationalDatabaseSnapshotName?: string;

  @Metadata({ data: "json, name=restoreTime" })
  restoreTime?: Date;

  @Metadata({ data: "json, name=sourceRelationalDatabaseName" })
  sourceRelationalDatabaseName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=useLatestRestorableTime" })
  useLatestRestorableTime?: boolean;
}
