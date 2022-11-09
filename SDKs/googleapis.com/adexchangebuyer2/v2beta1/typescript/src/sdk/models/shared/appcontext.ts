import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppContextAppTypesEnum {
    Native = "NATIVE"
,    Web = "WEB"
}


// AppContext
/** 
 * Output only. The app type the restriction applies to for mobile device.
**/
export class AppContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=appTypes" })
  appTypes?: AppContextAppTypesEnum[];
}
