import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterMapEntry } from "./parametermapentry";


// PolicyParameter
/** 
 *  Name of the parameter from the Review policy. 
**/
export class PolicyParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=MapEntries", elemType: shared.ParameterMapEntry })
  mapEntries?: ParameterMapEntry[];

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
