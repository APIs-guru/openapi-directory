import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentError } from "./environmenterror";


// EnvironmentResponse
/** 
 * The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error.
**/
export class EnvironmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: EnvironmentError;

  @Metadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}
