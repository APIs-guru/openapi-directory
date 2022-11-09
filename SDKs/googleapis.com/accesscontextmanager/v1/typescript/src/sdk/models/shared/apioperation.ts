import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MethodSelector } from "./methodselector";


// ApiOperation
/** 
 * Identification for an API Operation.
**/
export class ApiOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=methodSelectors", elemType: shared.MethodSelector })
  methodSelectors?: MethodSelector[];

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
