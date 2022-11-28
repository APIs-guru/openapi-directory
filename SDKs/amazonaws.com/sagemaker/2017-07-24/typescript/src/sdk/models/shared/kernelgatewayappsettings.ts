import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomImage } from "./customimage";
import { ResourceSpec } from "./resourcespec";



// KernelGatewayAppSettings
/** 
 * The KernelGateway app settings.
**/
export class KernelGatewayAppSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomImages", elemType: CustomImage })
  customImages?: CustomImage[];

  @SpeakeasyMetadata({ data: "json, name=DefaultResourceSpec" })
  defaultResourceSpec?: ResourceSpec;

  @SpeakeasyMetadata({ data: "json, name=LifecycleConfigArns" })
  lifecycleConfigArns?: string[];
}
