import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfigSummary } from "./datacaptureconfigsummary";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { DeploymentConfig } from "./deploymentconfig";
import { ProductionVariantSummary } from "./productionvariantsummary";



export class DescribeEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AsyncInferenceConfig" })
  asyncInferenceConfig?: AsyncInferenceConfig;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DataCaptureConfig" })
  dataCaptureConfig?: DataCaptureConfigSummary;

  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointStatus" })
  endpointStatus: EndpointStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastDeploymentConfig" })
  lastDeploymentConfig?: DeploymentConfig;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ProductionVariants", elemType: ProductionVariantSummary })
  productionVariants?: ProductionVariantSummary[];
}
