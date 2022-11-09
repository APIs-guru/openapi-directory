import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentParameterTypeEnum } from "./documentparametertypeenum";


// DocumentParameter
/** 
 * Parameters specified in a System Manager document that run on the server when the command is run. 
**/
export class DocumentParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: DocumentParameterTypeEnum;
}
