import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentParameterTypeEnum } from "./documentparametertypeenum";



// DocumentParameter
/** 
 * Parameters specified in a System Manager document that run on the server when the command is run. 
**/
export class DocumentParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DocumentParameterTypeEnum;
}
