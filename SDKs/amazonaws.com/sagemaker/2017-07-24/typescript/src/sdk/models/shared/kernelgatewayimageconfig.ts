import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileSystemConfig } from "./filesystemconfig";
import { KernelSpec } from "./kernelspec";


// KernelGatewayImageConfig
/** 
 * The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
**/
export class KernelGatewayImageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystemConfig" })
  fileSystemConfig?: FileSystemConfig;

  @Metadata({ data: "json, name=KernelSpecs", elemType: shared.KernelSpec })
  kernelSpecs: KernelSpec[];
}
