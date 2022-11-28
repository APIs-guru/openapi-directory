import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalPermissions } from "./principalpermissions";
import { DataLakePrincipal } from "./datalakeprincipal";
/**
 * A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
**/
export declare class DataLakeSettings extends SpeakeasyBase {
    createDatabaseDefaultPermissions?: PrincipalPermissions[];
    createTableDefaultPermissions?: PrincipalPermissions[];
    dataLakeAdmins?: DataLakePrincipal[];
    trustedResourceOwners?: string[];
}
