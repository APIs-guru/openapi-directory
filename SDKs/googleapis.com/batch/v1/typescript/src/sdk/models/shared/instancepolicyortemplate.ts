import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstancePolicy } from "./instancepolicy";



// InstancePolicyOrTemplate
/** 
 * Either an InstancePolicy or an instance template.
**/
export class InstancePolicyOrTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installGpuDrivers" })
  installGpuDrivers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instanceTemplate" })
  instanceTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: InstancePolicy;
}
