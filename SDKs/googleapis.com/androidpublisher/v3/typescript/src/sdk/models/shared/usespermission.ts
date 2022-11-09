import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UsesPermission
/** 
 * A permission used by this APK.
**/
export class UsesPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxSdkVersion" })
  maxSdkVersion?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
