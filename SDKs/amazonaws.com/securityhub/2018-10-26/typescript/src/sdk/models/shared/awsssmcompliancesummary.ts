import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsSsmComplianceSummary
/** 
 * Provides the details about the compliance status for a patch.
**/
export class AwsSsmComplianceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=CompliantCriticalCount" })
  compliantCriticalCount?: number;

  @Metadata({ data: "json, name=CompliantHighCount" })
  compliantHighCount?: number;

  @Metadata({ data: "json, name=CompliantInformationalCount" })
  compliantInformationalCount?: number;

  @Metadata({ data: "json, name=CompliantLowCount" })
  compliantLowCount?: number;

  @Metadata({ data: "json, name=CompliantMediumCount" })
  compliantMediumCount?: number;

  @Metadata({ data: "json, name=CompliantUnspecifiedCount" })
  compliantUnspecifiedCount?: number;

  @Metadata({ data: "json, name=ExecutionType" })
  executionType?: string;

  @Metadata({ data: "json, name=NonCompliantCriticalCount" })
  nonCompliantCriticalCount?: number;

  @Metadata({ data: "json, name=NonCompliantHighCount" })
  nonCompliantHighCount?: number;

  @Metadata({ data: "json, name=NonCompliantInformationalCount" })
  nonCompliantInformationalCount?: number;

  @Metadata({ data: "json, name=NonCompliantLowCount" })
  nonCompliantLowCount?: number;

  @Metadata({ data: "json, name=NonCompliantMediumCount" })
  nonCompliantMediumCount?: number;

  @Metadata({ data: "json, name=NonCompliantUnspecifiedCount" })
  nonCompliantUnspecifiedCount?: number;

  @Metadata({ data: "json, name=OverallSeverity" })
  overallSeverity?: string;

  @Metadata({ data: "json, name=PatchBaselineId" })
  patchBaselineId?: string;

  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
