import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ViolatedPasswordPolicy
/** 
 * Violated password policy information
**/
export class ViolatedPasswordPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
