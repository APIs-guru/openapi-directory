import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";
import { MetricsConfiguration } from "./metricsconfiguration";
import { Tag } from "./tag";
import { DeploymentTargetEnum } from "./deploymenttargetenum";
export declare class CreateSystemInstanceRequest extends SpeakeasyBase {
    definition: DefinitionDocument;
    flowActionsRoleArn?: string;
    greengrassGroupName?: string;
    metricsConfiguration?: MetricsConfiguration;
    s3BucketName?: string;
    tags?: Tag[];
    target: DeploymentTargetEnum;
}
