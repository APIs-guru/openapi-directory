import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestActiveDirectoryConfigResponse
/** 
 * Response model for testing connection for Active Directory configuration
**/
export class TestActiveDirectoryConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ldapUsersDomain" })
  ldapUsersDomain: string;

  @Metadata({ data: "json, name=serverAdminName" })
  serverAdminName: string;

  @Metadata({ data: "json, name=serverAdminPassword" })
  serverAdminPassword: string;

  @Metadata({ data: "json, name=serverIp" })
  serverIp: string;

  @Metadata({ data: "json, name=serverPort" })
  serverPort: number;

  @Metadata({ data: "json, name=sslFingerPrint" })
  sslFingerPrint?: string;

  @Metadata({ data: "json, name=useLdaps" })
  useLdaps: boolean;
}
