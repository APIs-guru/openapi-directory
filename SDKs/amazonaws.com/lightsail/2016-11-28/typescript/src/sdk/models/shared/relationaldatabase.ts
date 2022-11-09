import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=backupRetentionEnabled" })
  backupRetentionEnabled?: boolean;

  @Metadata({ data: "json, name=caCertificateIdentifier" })
  caCertificateIdentifier?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=engine" })
  engine?: string;

  @Metadata({ data: "json, name=engineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=hardware" })
  hardware?: RelationalDatabaseHardware;

  @Metadata({ data: "json, name=latestRestorableTime" })
  latestRestorableTime?: Date;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=masterDatabaseName" })
  masterDatabaseName?: string;

  @Metadata({ data: "json, name=masterEndpoint" })
  masterEndpoint?: RelationalDatabaseEndpoint;

  @Metadata({ data: "json, name=masterUsername" })
  masterUsername?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameterApplyStatus" })
  parameterApplyStatus?: string;

  @Metadata({ data: "json, name=pendingMaintenanceActions", elemType: shared.PendingMaintenanceAction })
  pendingMaintenanceActions?: PendingMaintenanceAction[];

  @Metadata({ data: "json, name=pendingModifiedValues" })
  pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;

  @Metadata({ data: "json, name=preferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "json, name=preferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "json, name=relationalDatabaseBlueprintId" })
  relationalDatabaseBlueprintId?: string;

  @Metadata({ data: "json, name=relationalDatabaseBundleId" })
  relationalDatabaseBundleId?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=secondaryAvailabilityZone" })
  secondaryAvailabilityZone?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
