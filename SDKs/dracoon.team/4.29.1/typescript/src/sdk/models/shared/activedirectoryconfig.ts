import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActiveDirectoryConfig
/** 
 * Active Directory configuration
**/
export class ActiveDirectoryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=adExportGroup" })
  adExportGroup: string;

  @Metadata({ data: "json, name=alias" })
  alias: string;

  @Metadata({ data: "json, name=createHomeFolder" })
  createHomeFolder?: boolean;

  @Metadata({ data: "json, name=homeFolderParent" })
  homeFolderParent?: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ldapUsersDomain" })
  ldapUsersDomain: string;

  @Metadata({ data: "json, name=sdsImportGroup" })
  sdsImportGroup?: number;

  @Metadata({ data: "json, name=serverAdminName" })
  serverAdminName: string;

  @Metadata({ data: "json, name=serverIp" })
  serverIp: string;

  @Metadata({ data: "json, name=serverPort" })
  serverPort: number;

  @Metadata({ data: "json, name=sslFingerPrint" })
  sslFingerPrint?: string;

  @Metadata({ data: "json, name=useLdaps" })
  useLdaps: boolean;

  @Metadata({ data: "json, name=userFilter" })
  userFilter: string;

  @Metadata({ data: "json, name=userImport" })
  userImport: boolean;
}
