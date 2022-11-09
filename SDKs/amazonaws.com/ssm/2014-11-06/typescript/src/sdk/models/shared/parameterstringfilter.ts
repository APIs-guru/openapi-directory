import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterStringFilter
/** 
 * One or more filters. Use a filter to return a more specific list of results.
**/
export class ParameterStringFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Option" })
  option?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
