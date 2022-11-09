import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FunctionConfiguration } from "./functionconfiguration";


// ListFunctionsResponse
/** 
 * Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>.
**/
export class ListFunctionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Functions", elemType: shared.FunctionConfiguration })
  functions?: FunctionConfiguration[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
