import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationalDatabaseBundle
/** 
 * Describes a database bundle. A bundle describes the performance specifications of the database.
**/
export class RelationalDatabaseBundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=diskSizeInGb" })
  diskSizeInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=transferPerMonthInGb" })
  transferPerMonthInGb?: number;
}
