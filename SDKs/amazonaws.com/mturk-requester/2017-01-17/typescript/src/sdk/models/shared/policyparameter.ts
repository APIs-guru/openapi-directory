import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterMapEntry } from "./parametermapentry";



// PolicyParameter
/** 
 *  Name of the parameter from the Review policy. 
**/
export class PolicyParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=MapEntries", elemType: ParameterMapEntry })
  mapEntries?: ParameterMapEntry[];

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
