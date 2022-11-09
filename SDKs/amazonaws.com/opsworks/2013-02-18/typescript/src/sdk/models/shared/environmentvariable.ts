import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnvironmentVariable
/** 
 * Represents an app's environment variable.
**/
export class EnvironmentVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Secure" })
  secure?: boolean;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
