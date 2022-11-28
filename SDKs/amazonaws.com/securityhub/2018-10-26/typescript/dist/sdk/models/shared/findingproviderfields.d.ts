import { SpeakeasyBase } from "../../../internal/utils";
import { RelatedFinding } from "./relatedfinding";
import { FindingProviderSeverity } from "./findingproviderseverity";
/**
 * In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.
**/
export declare class FindingProviderFields extends SpeakeasyBase {
    confidence?: number;
    criticality?: number;
    relatedFindings?: RelatedFinding[];
    severity?: FindingProviderSeverity;
    types?: string[];
}
