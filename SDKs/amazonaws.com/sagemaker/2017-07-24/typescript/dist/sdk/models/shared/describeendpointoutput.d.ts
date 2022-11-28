import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfigSummary } from "./datacaptureconfigsummary";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { DeploymentConfig } from "./deploymentconfig";
import { ProductionVariantSummary } from "./productionvariantsummary";
export declare class DescribeEndpointOutput extends SpeakeasyBase {
    asyncInferenceConfig?: AsyncInferenceConfig;
    creationTime: Date;
    dataCaptureConfig?: DataCaptureConfigSummary;
    endpointArn: string;
    endpointConfigName: string;
    endpointName: string;
    endpointStatus: EndpointStatusEnum;
    failureReason?: string;
    lastDeploymentConfig?: DeploymentConfig;
    lastModifiedTime: Date;
    productionVariants?: ProductionVariantSummary[];
}
