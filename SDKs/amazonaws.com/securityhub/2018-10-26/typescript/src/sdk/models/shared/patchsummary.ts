import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PatchSummary
/** 
 * Provides an overview of the patch compliance status for an instance against a selected compliance standard.
**/
export class PatchSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedCount" })
  failedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=InstalledCount" })
  installedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstalledOtherCount" })
  installedOtherCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstalledPendingReboot" })
  installedPendingReboot?: number;

  @SpeakeasyMetadata({ data: "json, name=InstalledRejectedCount" })
  installedRejectedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MissingCount" })
  missingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=OperationEndTime" })
  operationEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=OperationStartTime" })
  operationStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=RebootOption" })
  rebootOption?: string;
}
