import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating an Active Directory configuration
**/
export declare class CreateActiveDirectoryConfigRequest extends SpeakeasyBase {
    adExportGroup?: string;
    alias: string;
    createHomeFolder?: boolean;
    homeFolderParent?: number;
    ldapUsersDomain: string;
    sdsImportGroup?: number;
    serverAdminName: string;
    serverAdminPassword: string;
    serverIp: string;
    serverPort: number;
    sslFingerPrint?: string;
    useLdaps?: boolean;
    userFilter: string;
    userImport?: boolean;
}
