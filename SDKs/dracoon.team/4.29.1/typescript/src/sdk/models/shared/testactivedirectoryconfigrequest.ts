import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestActiveDirectoryConfigRequest
/** 
 * Request model for testing connection for Active Directory configuration
**/
export class TestActiveDirectoryConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ldapUsersDomain" })
  ldapUsersDomain: string;

  @SpeakeasyMetadata({ data: "json, name=serverAdminName" })
  serverAdminName: string;

  @SpeakeasyMetadata({ data: "json, name=serverAdminPassword" })
  serverAdminPassword: string;

  @SpeakeasyMetadata({ data: "json, name=serverIp" })
  serverIp: string;

  @SpeakeasyMetadata({ data: "json, name=serverPort" })
  serverPort: number;

  @SpeakeasyMetadata({ data: "json, name=sslFingerPrint" })
  sslFingerPrint?: string;

  @SpeakeasyMetadata({ data: "json, name=useLdaps" })
  useLdaps?: boolean;
}
