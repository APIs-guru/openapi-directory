import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorParameter
/** 
 * Container for an error parameter.
**/
export class ErrorParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
