import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PatchSummary
/** 
 * Provides an overview of the patch compliance status for an instance against a selected compliance standard.
**/
export class PatchSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedCount" })
  failedCount?: number;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=InstalledCount" })
  installedCount?: number;

  @Metadata({ data: "json, name=InstalledOtherCount" })
  installedOtherCount?: number;

  @Metadata({ data: "json, name=InstalledPendingReboot" })
  installedPendingReboot?: number;

  @Metadata({ data: "json, name=InstalledRejectedCount" })
  installedRejectedCount?: number;

  @Metadata({ data: "json, name=MissingCount" })
  missingCount?: number;

  @Metadata({ data: "json, name=Operation" })
  operation?: string;

  @Metadata({ data: "json, name=OperationEndTime" })
  operationEndTime?: string;

  @Metadata({ data: "json, name=OperationStartTime" })
  operationStartTime?: string;

  @Metadata({ data: "json, name=RebootOption" })
  rebootOption?: string;
}
