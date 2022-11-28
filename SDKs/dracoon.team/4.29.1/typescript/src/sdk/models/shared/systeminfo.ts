import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthMethod } from "./authmethod";



// SystemInfo
/** 
 * System information (default language and authentication methods)
**/
export class SystemInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authMethods", elemType: AuthMethod })
  authMethods: AuthMethod[];

  @SpeakeasyMetadata({ data: "json, name=hideLoginInputFields" })
  hideLoginInputFields: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageDefault" })
  languageDefault: string;

  @SpeakeasyMetadata({ data: "json, name=s3EnforceDirectUpload" })
  s3EnforceDirectUpload: boolean;

  @SpeakeasyMetadata({ data: "json, name=s3Hosts" })
  s3Hosts: string[];

  @SpeakeasyMetadata({ data: "json, name=useS3Storage" })
  useS3Storage: boolean;
}
