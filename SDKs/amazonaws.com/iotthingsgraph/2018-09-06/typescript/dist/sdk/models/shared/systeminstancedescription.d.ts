import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { MetricsConfiguration } from "./metricsconfiguration";
import { SystemInstanceSummary } from "./systeminstancesummary";
import { DependencyRevision } from "./dependencyrevision";
/**
 * An object that contains a system instance definition and summary information.
**/
export declare class SystemInstanceDescription extends SpeakeasyBase {
    definition?: DefinitionDocument;
    flowActionsRoleArn?: string;
    metricsConfiguration?: MetricsConfiguration;
    s3BucketName?: string;
    summary?: SystemInstanceSummary;
    validatedDependencyRevisions?: DependencyRevision[];
    validatedNamespaceVersion?: number;
}
