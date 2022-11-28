import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response model for testing connection for Active Directory configuration
**/
export declare class TestActiveDirectoryConfigResponse extends SpeakeasyBase {
    ldapUsersDomain: string;
    serverAdminName: string;
    serverAdminPassword: string;
    serverIp: string;
    serverPort: number;
    sslFingerPrint?: string;
    useLdaps: boolean;
}
