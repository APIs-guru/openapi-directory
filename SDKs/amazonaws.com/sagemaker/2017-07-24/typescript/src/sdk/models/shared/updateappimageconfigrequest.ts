import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";



export class UpdateAppImageConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=KernelGatewayImageConfig" })
  kernelGatewayImageConfig?: KernelGatewayImageConfig;
}
