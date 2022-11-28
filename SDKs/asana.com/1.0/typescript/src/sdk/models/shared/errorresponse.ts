import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



// ErrorResponse
/** 
 * Sadly, sometimes requests to the API are not successful. Failures can
 * occur for a wide range of reasons. In all cases, the API should return
 * an HTTP Status Code that indicates the nature of the failure,
 * with a response body in JSON format containing additional information.
 * 
 * 
 * In the event of a server error the response body will contain an error
 * phrase. These phrases are automatically generated using the
 * [node-asana-phrase
 * library](https://github.com/Asana/node-asana-phrase) and can be used by
 * Asana support to quickly look up the incident that caused the server
 * error.
**/
export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];
}
