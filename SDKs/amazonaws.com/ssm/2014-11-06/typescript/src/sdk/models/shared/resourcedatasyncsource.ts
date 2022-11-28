import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncAwsOrganizationsSource } from "./resourcedatasyncawsorganizationssource";



// ResourceDataSyncSource
/** 
 * Information about the source of the data included in the resource data sync.
**/
export class ResourceDataSyncSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsOrganizationsSource" })
  awsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  @SpeakeasyMetadata({ data: "json, name=EnableAllOpsDataSources" })
  enableAllOpsDataSources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeFutureRegions" })
  includeFutureRegions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SourceRegions" })
  sourceRegions: string[];

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType: string;
}
