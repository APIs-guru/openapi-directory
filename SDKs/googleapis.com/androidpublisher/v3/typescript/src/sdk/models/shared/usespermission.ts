import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsesPermission
/** 
 * A permission used by this APK.
**/
export class UsesPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxSdkVersion" })
  maxSdkVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
