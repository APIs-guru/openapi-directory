import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for testing connection for Active Directory configuration
**/
export declare class TestActiveDirectoryConfigRequest extends SpeakeasyBase {
    ldapUsersDomain: string;
    serverAdminName: string;
    serverAdminPassword: string;
    serverIp: string;
    serverPort: number;
    sslFingerPrint?: string;
    useLdaps?: boolean;
}
