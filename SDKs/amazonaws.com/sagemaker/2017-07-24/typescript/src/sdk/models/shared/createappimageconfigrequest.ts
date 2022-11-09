import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";
import { Tag } from "./tag";


export class CreateAppImageConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName: string;

  @Metadata({ data: "json, name=KernelGatewayImageConfig" })
  kernelGatewayImageConfig?: KernelGatewayImageConfig;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
