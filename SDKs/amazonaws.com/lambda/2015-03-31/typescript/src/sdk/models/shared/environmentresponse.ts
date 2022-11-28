import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentError } from "./environmenterror";



// EnvironmentResponse
/** 
 * The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error.
**/
export class EnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: EnvironmentError;

  @SpeakeasyMetadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}
