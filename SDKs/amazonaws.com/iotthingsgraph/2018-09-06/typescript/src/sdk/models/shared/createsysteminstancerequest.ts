import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DefinitionDocument } from "./definitiondocument";
import { MetricsConfiguration } from "./metricsconfiguration";
import { Tag } from "./tag";
import { DeploymentTargetEnum } from "./deploymenttargetenum";


export class CreateSystemInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition: DefinitionDocument;

  @Metadata({ data: "json, name=flowActionsRoleArn" })
  flowActionsRoleArn?: string;

  @Metadata({ data: "json, name=greengrassGroupName" })
  greengrassGroupName?: string;

  @Metadata({ data: "json, name=metricsConfiguration" })
  metricsConfiguration?: MetricsConfiguration;

  @Metadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=target" })
  target: DeploymentTargetEnum;
}
