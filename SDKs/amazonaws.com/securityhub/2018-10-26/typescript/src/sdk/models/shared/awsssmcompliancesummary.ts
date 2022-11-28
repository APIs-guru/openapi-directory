import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsSsmComplianceSummary
/** 
 * Provides the details about the compliance status for a patch.
**/
export class AwsSsmComplianceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=CompliantCriticalCount" })
  compliantCriticalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CompliantHighCount" })
  compliantHighCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CompliantInformationalCount" })
  compliantInformationalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CompliantLowCount" })
  compliantLowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CompliantMediumCount" })
  compliantMediumCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CompliantUnspecifiedCount" })
  compliantUnspecifiedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ExecutionType" })
  executionType?: string;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantCriticalCount" })
  nonCompliantCriticalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantHighCount" })
  nonCompliantHighCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantInformationalCount" })
  nonCompliantInformationalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantLowCount" })
  nonCompliantLowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantMediumCount" })
  nonCompliantMediumCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantUnspecifiedCount" })
  nonCompliantUnspecifiedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=OverallSeverity" })
  overallSeverity?: string;

  @SpeakeasyMetadata({ data: "json, name=PatchBaselineId" })
  patchBaselineId?: string;

  @SpeakeasyMetadata({ data: "json, name=PatchGroup" })
  patchGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
