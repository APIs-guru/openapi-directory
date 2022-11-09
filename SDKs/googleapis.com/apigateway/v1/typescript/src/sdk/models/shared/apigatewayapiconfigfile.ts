import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApigatewayApiConfigFile
/** 
 * A lightweight description of a file.
**/
export class ApigatewayApiConfigFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
