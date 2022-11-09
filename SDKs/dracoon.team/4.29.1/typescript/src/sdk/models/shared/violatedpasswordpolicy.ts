import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ViolatedPasswordPolicy
/** 
 * Violated password policy information
**/
export class ViolatedPasswordPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
