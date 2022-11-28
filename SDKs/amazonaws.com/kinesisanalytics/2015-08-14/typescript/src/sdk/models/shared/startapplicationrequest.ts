import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfiguration } from "./inputconfiguration";



// StartApplicationRequest
/** 
 * <p/>
**/
export class StartApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=InputConfigurations", elemType: InputConfiguration })
  inputConfigurations: InputConfiguration[];
}
