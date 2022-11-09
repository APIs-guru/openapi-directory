import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomImage } from "./customimage";
import { ResourceSpec } from "./resourcespec";


// KernelGatewayAppSettings
/** 
 * The KernelGateway app settings.
**/
export class KernelGatewayAppSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomImages", elemType: shared.CustomImage })
  customImages?: CustomImage[];

  @Metadata({ data: "json, name=DefaultResourceSpec" })
  defaultResourceSpec?: ResourceSpec;

  @Metadata({ data: "json, name=LifecycleConfigArns" })
  lifecycleConfigArns?: string[];
}
