import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DefinitionDocument } from "./definitiondocument";
import { MetricsConfiguration } from "./metricsconfiguration";
import { SystemInstanceSummary } from "./systeminstancesummary";
import { DependencyRevision } from "./dependencyrevision";


// SystemInstanceDescription
/** 
 * An object that contains a system instance definition and summary information.
**/
export class SystemInstanceDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition?: DefinitionDocument;

  @Metadata({ data: "json, name=flowActionsRoleArn" })
  flowActionsRoleArn?: string;

  @Metadata({ data: "json, name=metricsConfiguration" })
  metricsConfiguration?: MetricsConfiguration;

  @Metadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: SystemInstanceSummary;

  @Metadata({ data: "json, name=validatedDependencyRevisions", elemType: shared.DependencyRevision })
  validatedDependencyRevisions?: DependencyRevision[];

  @Metadata({ data: "json, name=validatedNamespaceVersion" })
  validatedNamespaceVersion?: number;
}
