import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Active Directory configuration
**/
export declare class ActiveDirectoryConfig extends SpeakeasyBase {
    adExportGroup: string;
    alias: string;
    createHomeFolder?: boolean;
    homeFolderParent?: number;
    id: number;
    ldapUsersDomain: string;
    sdsImportGroup?: number;
    serverAdminName: string;
    serverIp: string;
    serverPort: number;
    sslFingerPrint?: string;
    useLdaps: boolean;
    userFilter: string;
    userImport: boolean;
}
