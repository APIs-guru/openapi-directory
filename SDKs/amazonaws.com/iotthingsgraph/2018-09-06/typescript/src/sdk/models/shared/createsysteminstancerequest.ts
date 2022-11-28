import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { MetricsConfiguration } from "./metricsconfiguration";
import { Tag } from "./tag";
import { DeploymentTargetEnum } from "./deploymenttargetenum";



export class CreateSystemInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition: DefinitionDocument;

  @SpeakeasyMetadata({ data: "json, name=flowActionsRoleArn" })
  flowActionsRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=greengrassGroupName" })
  greengrassGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricsConfiguration" })
  metricsConfiguration?: MetricsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: DeploymentTargetEnum;
}
