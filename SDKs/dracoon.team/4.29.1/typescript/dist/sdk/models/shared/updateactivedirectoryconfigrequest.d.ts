import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating an Active Directory configuration
**/
export declare class UpdateActiveDirectoryConfigRequest extends SpeakeasyBase {
    adExportGroup?: string;
    alias?: string;
    createHomeFolder?: boolean;
    homeFolderParent?: number;
    ldapUsersDomain?: string;
    sdsImportGroup?: number;
    serverAdminName?: string;
    serverAdminPassword?: string;
    serverIp?: string;
    serverPort?: number;
    sslFingerPrint?: string;
    useLdaps?: boolean;
    userFilter?: string;
    userImport?: boolean;
}
