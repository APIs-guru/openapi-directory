import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateActiveDirectoryConfigRequest
/** 
 * Request model for creating an Active Directory configuration
**/
export class CreateActiveDirectoryConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adExportGroup" })
  adExportGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=createHomeFolder" })
  createHomeFolder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=homeFolderParent" })
  homeFolderParent?: number;

  @SpeakeasyMetadata({ data: "json, name=ldapUsersDomain" })
  ldapUsersDomain: string;

  @SpeakeasyMetadata({ data: "json, name=sdsImportGroup" })
  sdsImportGroup?: number;

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

  @SpeakeasyMetadata({ data: "json, name=userFilter" })
  userFilter: string;

  @SpeakeasyMetadata({ data: "json, name=userImport" })
  userImport?: boolean;
}
