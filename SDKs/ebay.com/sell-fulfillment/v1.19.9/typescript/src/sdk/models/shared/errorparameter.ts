import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorParameter
/** 
 * This type contains the name and value of an input parameter that contributed to a specific error or warning condition.
**/
export class ErrorParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
