import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";



// ListFunctionsResponse
/** 
 * A list of Lambda functions.
**/
export class ListFunctionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Functions", elemType: FunctionConfiguration })
  functions?: FunctionConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
