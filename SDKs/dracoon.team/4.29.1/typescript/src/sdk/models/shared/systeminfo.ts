import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthMethod } from "./authmethod";


// SystemInfo
/** 
 * System information (default language and authentication methods)
**/
export class SystemInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=authMethods", elemType: shared.AuthMethod })
  authMethods: AuthMethod[];

  @Metadata({ data: "json, name=hideLoginInputFields" })
  hideLoginInputFields: boolean;

  @Metadata({ data: "json, name=languageDefault" })
  languageDefault: string;

  @Metadata({ data: "json, name=s3EnforceDirectUpload" })
  s3EnforceDirectUpload: boolean;

  @Metadata({ data: "json, name=s3Hosts" })
  s3Hosts: string[];

  @Metadata({ data: "json, name=useS3Storage" })
  useS3Storage: boolean;
}
