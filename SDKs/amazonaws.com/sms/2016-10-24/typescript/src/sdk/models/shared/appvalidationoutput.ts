import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SsmOutput } from "./ssmoutput";


// AppValidationOutput
/** 
 * Output from validating an application.
**/
export class AppValidationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssmOutput" })
  ssmOutput?: SsmOutput;
}
