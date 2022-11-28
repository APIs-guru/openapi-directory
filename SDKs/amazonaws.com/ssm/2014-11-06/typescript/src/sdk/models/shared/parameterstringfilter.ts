import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterStringFilter
/** 
 * One or more filters. Use a filter to return a more specific list of results.
**/
export class ParameterStringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Option" })
  option?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
