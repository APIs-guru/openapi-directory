import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";



// ListFunctionsResponse
/** 
 * Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>.
**/
export class ListFunctionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Functions", elemType: FunctionConfiguration })
  functions?: FunctionConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
