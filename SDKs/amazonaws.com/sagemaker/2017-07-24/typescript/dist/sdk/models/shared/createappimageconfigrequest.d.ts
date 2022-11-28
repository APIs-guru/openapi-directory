import { SpeakeasyBase } from "../../../internal/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";
import { Tag } from "./tag";
export declare class CreateAppImageConfigRequest extends SpeakeasyBase {
    appImageConfigName: string;
    kernelGatewayImageConfig?: KernelGatewayImageConfig;
    tags?: Tag[];
}
