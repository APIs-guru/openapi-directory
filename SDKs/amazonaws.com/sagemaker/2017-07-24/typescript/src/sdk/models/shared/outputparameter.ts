import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputParameter
/** 
 * An output parameter of a pipeline step.
**/
export class OutputParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
