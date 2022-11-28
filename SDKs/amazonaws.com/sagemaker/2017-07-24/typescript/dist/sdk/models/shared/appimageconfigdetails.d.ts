import { SpeakeasyBase } from "../../../internal/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";
/**
 * The configuration for running a SageMaker image as a KernelGateway app.
**/
export declare class AppImageConfigDetails extends SpeakeasyBase {
    appImageConfigArn?: string;
    appImageConfigName?: string;
    creationTime?: Date;
    kernelGatewayImageConfig?: KernelGatewayImageConfig;
    lastModifiedTime?: Date;
}
