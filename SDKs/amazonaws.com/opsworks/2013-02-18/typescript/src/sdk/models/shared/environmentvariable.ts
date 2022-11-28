import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvironmentVariable
/** 
 * Represents an app's environment variable.
**/
export class EnvironmentVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Secure" })
  secure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
