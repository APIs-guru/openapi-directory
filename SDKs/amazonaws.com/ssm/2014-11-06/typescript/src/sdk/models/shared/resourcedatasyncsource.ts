import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDataSyncAwsOrganizationsSource } from "./resourcedatasyncawsorganizationssource";


// ResourceDataSyncSource
/** 
 * Information about the source of the data included in the resource data sync.
**/
export class ResourceDataSyncSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsOrganizationsSource" })
  awsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  @Metadata({ data: "json, name=EnableAllOpsDataSources" })
  enableAllOpsDataSources?: boolean;

  @Metadata({ data: "json, name=IncludeFutureRegions" })
  includeFutureRegions?: boolean;

  @Metadata({ data: "json, name=SourceRegions" })
  sourceRegions: string[];

  @Metadata({ data: "json, name=SourceType" })
  sourceType: string;
}
