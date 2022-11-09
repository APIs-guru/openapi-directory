import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateRelationalDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=masterDatabaseName" })
  masterDatabaseName: string;

  @Metadata({ data: "json, name=masterUserPassword" })
  masterUserPassword?: string;

  @Metadata({ data: "json, name=masterUsername" })
  masterUsername: string;

  @Metadata({ data: "json, name=preferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "json, name=preferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "json, name=relationalDatabaseBlueprintId" })
  relationalDatabaseBlueprintId: string;

  @Metadata({ data: "json, name=relationalDatabaseBundleId" })
  relationalDatabaseBundleId: string;

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
