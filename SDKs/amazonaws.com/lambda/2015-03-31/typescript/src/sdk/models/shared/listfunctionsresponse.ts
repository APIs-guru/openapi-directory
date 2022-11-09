import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FunctionConfiguration } from "./functionconfiguration";


// ListFunctionsResponse
/** 
 * A list of Lambda functions.
**/
export class ListFunctionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Functions", elemType: shared.FunctionConfiguration })
  functions?: FunctionConfiguration[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
