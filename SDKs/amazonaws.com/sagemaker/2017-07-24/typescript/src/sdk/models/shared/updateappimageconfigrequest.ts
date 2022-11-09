import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";


export class UpdateAppImageConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName: string;

  @Metadata({ data: "json, name=KernelGatewayImageConfig" })
  kernelGatewayImageConfig?: KernelGatewayImageConfig;
}
