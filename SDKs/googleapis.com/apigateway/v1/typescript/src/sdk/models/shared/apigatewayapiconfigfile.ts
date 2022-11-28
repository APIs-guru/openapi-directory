import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApigatewayApiConfigFile
/** 
 * A lightweight description of a file.
**/
export class ApigatewayApiConfigFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
