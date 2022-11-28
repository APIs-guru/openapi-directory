import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemConfig } from "./filesystemconfig";
import { KernelSpec } from "./kernelspec";
/**
 * The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
**/
export declare class KernelGatewayImageConfig extends SpeakeasyBase {
    fileSystemConfig?: FileSystemConfig;
    kernelSpecs: KernelSpec[];
}
