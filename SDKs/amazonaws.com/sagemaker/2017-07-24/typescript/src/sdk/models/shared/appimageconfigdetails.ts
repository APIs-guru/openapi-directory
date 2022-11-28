import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";



// AppImageConfigDetails
/** 
 * The configuration for running a SageMaker image as a KernelGateway app.
**/
export class AppImageConfigDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppImageConfigArn" })
  appImageConfigArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=KernelGatewayImageConfig" })
  kernelGatewayImageConfig?: KernelGatewayImageConfig;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
