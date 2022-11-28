import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceSpec } from "./resourcespec";



// JupyterServerAppSettings
/** 
 * The JupyterServer app settings.
**/
export class JupyterServerAppSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultResourceSpec" })
  defaultResourceSpec?: ResourceSpec;

  @SpeakeasyMetadata({ data: "json, name=LifecycleConfigArns" })
  lifecycleConfigArns?: string[];
}
