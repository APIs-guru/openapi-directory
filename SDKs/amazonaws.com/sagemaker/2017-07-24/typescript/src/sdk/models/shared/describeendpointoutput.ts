import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfigSummary } from "./datacaptureconfigsummary";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { DeploymentConfig } from "./deploymentconfig";
import { ProductionVariantSummary } from "./productionvariantsummary";


export class DescribeEndpointOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AsyncInferenceConfig" })
  asyncInferenceConfig?: AsyncInferenceConfig;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=DataCaptureConfig" })
  dataCaptureConfig?: DataCaptureConfigSummary;

  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @Metadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=EndpointStatus" })
  endpointStatus: EndpointStatusEnum;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastDeploymentConfig" })
  lastDeploymentConfig?: DeploymentConfig;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=ProductionVariants", elemType: shared.ProductionVariantSummary })
  productionVariants?: ProductionVariantSummary[];
}
