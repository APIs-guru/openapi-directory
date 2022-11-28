import { SpeakeasyBase } from "../../../internal/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";
export declare class UpdateAppImageConfigRequest extends SpeakeasyBase {
    appImageConfigName: string;
    kernelGatewayImageConfig?: KernelGatewayImageConfig;
}
