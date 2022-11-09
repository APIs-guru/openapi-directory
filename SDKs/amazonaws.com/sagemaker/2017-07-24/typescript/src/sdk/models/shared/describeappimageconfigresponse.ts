import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";


export class DescribeAppImageConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppImageConfigArn" })
  appImageConfigArn?: string;

  @Metadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=KernelGatewayImageConfig" })
  kernelGatewayImageConfig?: KernelGatewayImageConfig;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
