import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputParameter
/** 
 * An output parameter of a pipeline step.
**/
export class OutputParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
