import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystemConfig } from "./filesystemconfig";
import { KernelSpec } from "./kernelspec";



// KernelGatewayImageConfig
/** 
 * The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
**/
export class KernelGatewayImageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystemConfig" })
  fileSystemConfig?: FileSystemConfig;

  @SpeakeasyMetadata({ data: "json, name=KernelSpecs", elemType: KernelSpec })
  kernelSpecs: KernelSpec[];
}
