import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseHardware } from "./relationaldatabasehardware";
import { ResourceLocation } from "./resourcelocation";
import { RelationalDatabaseEndpoint } from "./relationaldatabaseendpoint";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";
import { PendingModifiedRelationalDatabaseValues } from "./pendingmodifiedrelationaldatabasevalues";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";



// RelationalDatabase
/** 
 * Describes a database.
**/
export class RelationalDatabase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=backupRetentionEnabled" })
  backupRetentionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=caCertificateIdentifier" })
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=engineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=hardware" })
  hardware?: RelationalDatabaseHardware;

  @SpeakeasyMetadata({ data: "json, name=latestRestorableTime" })
  latestRestorableTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=masterDatabaseName" })
  masterDatabaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=masterEndpoint" })
  masterEndpoint?: RelationalDatabaseEndpoint;

  @SpeakeasyMetadata({ data: "json, name=masterUsername" })
  masterUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterApplyStatus" })
  parameterApplyStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingMaintenanceActions", elemType: PendingMaintenanceAction })
  pendingMaintenanceActions?: PendingMaintenanceAction[];

  @SpeakeasyMetadata({ data: "json, name=pendingModifiedValues" })
  pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;

  @SpeakeasyMetadata({ data: "json, name=preferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseBlueprintId" })
  relationalDatabaseBlueprintId?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseBundleId" })
  relationalDatabaseBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=secondaryAvailabilityZone" })
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
