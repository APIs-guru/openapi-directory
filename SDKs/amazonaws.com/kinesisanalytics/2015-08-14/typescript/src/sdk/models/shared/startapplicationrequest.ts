import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputConfiguration } from "./inputconfiguration";


// StartApplicationRequest
/** 
 * <p/>
**/
export class StartApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=InputConfigurations", elemType: shared.InputConfiguration })
  inputConfigurations: InputConfiguration[];
}
