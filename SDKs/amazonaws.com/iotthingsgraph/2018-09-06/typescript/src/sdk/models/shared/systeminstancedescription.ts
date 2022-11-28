import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { MetricsConfiguration } from "./metricsconfiguration";
import { SystemInstanceSummary } from "./systeminstancesummary";
import { DependencyRevision } from "./dependencyrevision";



// SystemInstanceDescription
/** 
 * An object that contains a system instance definition and summary information.
**/
export class SystemInstanceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: DefinitionDocument;

  @SpeakeasyMetadata({ data: "json, name=flowActionsRoleArn" })
  flowActionsRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=metricsConfiguration" })
  metricsConfiguration?: MetricsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: SystemInstanceSummary;

  @SpeakeasyMetadata({ data: "json, name=validatedDependencyRevisions", elemType: DependencyRevision })
  validatedDependencyRevisions?: DependencyRevision[];

  @SpeakeasyMetadata({ data: "json, name=validatedNamespaceVersion" })
  validatedNamespaceVersion?: number;
}
