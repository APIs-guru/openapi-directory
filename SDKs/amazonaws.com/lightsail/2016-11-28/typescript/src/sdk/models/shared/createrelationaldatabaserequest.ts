import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateRelationalDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=masterDatabaseName" })
  masterDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=masterUserPassword" })
  masterUserPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=masterUsername" })
  masterUsername: string;

  @SpeakeasyMetadata({ data: "json, name=preferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseBlueprintId" })
  relationalDatabaseBlueprintId: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseBundleId" })
  relationalDatabaseBundleId: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
