import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SsmOutput } from "./ssmoutput";



// AppValidationOutput
/** 
 * Output from validating an application.
**/
export class AppValidationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssmOutput" })
  ssmOutput?: SsmOutput;
}
