import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelatedFinding } from "./relatedfinding";
import { FindingProviderSeverity } from "./findingproviderseverity";



// FindingProviderFields
/** 
 * In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.
**/
export class FindingProviderFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Criticality" })
  criticality?: number;

  @SpeakeasyMetadata({ data: "json, name=RelatedFindings", elemType: RelatedFinding })
  relatedFindings?: RelatedFinding[];

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: FindingProviderSeverity;

  @SpeakeasyMetadata({ data: "json, name=Types" })
  types?: string[];
}
