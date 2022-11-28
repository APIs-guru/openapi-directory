import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MethodSelector } from "./methodselector";



// ApiOperation
/** 
 * Identification for an API Operation.
**/
export class ApiOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methodSelectors", elemType: MethodSelector })
  methodSelectors?: MethodSelector[];

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
