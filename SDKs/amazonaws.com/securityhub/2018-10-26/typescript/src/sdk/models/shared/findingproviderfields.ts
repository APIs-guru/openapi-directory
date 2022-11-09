import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelatedFinding } from "./relatedfinding";
import { FindingProviderSeverity } from "./findingproviderseverity";


// FindingProviderFields
/** 
 * In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.
**/
export class FindingProviderFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Criticality" })
  criticality?: number;

  @Metadata({ data: "json, name=RelatedFindings", elemType: shared.RelatedFinding })
  relatedFindings?: RelatedFinding[];

  @Metadata({ data: "json, name=Severity" })
  severity?: FindingProviderSeverity;

  @Metadata({ data: "json, name=Types" })
  types?: string[];
}
