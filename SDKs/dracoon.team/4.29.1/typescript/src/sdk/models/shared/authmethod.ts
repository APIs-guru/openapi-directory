import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthMethod
/** 
 * Authentication method
**/
export class AuthMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority: number;
}
