import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthMethod
/** 
 * Authentication method
**/
export class AuthMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=priority" })
  priority: number;
}
