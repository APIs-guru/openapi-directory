import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceSpec } from "./resourcespec";


// JupyterServerAppSettings
/** 
 * The JupyterServer app settings.
**/
export class JupyterServerAppSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultResourceSpec" })
  defaultResourceSpec?: ResourceSpec;

  @Metadata({ data: "json, name=LifecycleConfigArns" })
  lifecycleConfigArns?: string[];
}
