import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";
import { Tag } from "./tag";



export class CreateAppImageConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=KernelGatewayImageConfig" })
  kernelGatewayImageConfig?: KernelGatewayImageConfig;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
