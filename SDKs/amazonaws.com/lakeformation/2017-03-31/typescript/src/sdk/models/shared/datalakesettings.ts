import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrincipalPermissions } from "./principalpermissions";
import { PrincipalPermissions } from "./principalpermissions";
import { DataLakePrincipal } from "./datalakeprincipal";


// DataLakeSettings
/** 
 * A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
**/
export class DataLakeSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateDatabaseDefaultPermissions", elemType: shared.PrincipalPermissions })
  createDatabaseDefaultPermissions?: PrincipalPermissions[];

  @Metadata({ data: "json, name=CreateTableDefaultPermissions", elemType: shared.PrincipalPermissions })
  createTableDefaultPermissions?: PrincipalPermissions[];

  @Metadata({ data: "json, name=DataLakeAdmins", elemType: shared.DataLakePrincipal })
  dataLakeAdmins?: DataLakePrincipal[];

  @Metadata({ data: "json, name=TrustedResourceOwners" })
  trustedResourceOwners?: string[];
}
