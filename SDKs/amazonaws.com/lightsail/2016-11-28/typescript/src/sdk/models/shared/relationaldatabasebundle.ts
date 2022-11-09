import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelationalDatabaseBundle
/** 
 * Describes a database bundle. A bundle describes the performance specifications of the database.
**/
export class RelationalDatabaseBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @Metadata({ data: "json, name=diskSizeInGb" })
  diskSizeInGb?: number;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;

  @Metadata({ data: "json, name=transferPerMonthInGb" })
  transferPerMonthInGb?: number;
}
