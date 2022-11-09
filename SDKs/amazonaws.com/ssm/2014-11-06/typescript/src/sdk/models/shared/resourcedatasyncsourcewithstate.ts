import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDataSyncAwsOrganizationsSource } from "./resourcedatasyncawsorganizationssource";


// ResourceDataSyncSourceWithState
/** 
 * <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Amazon Web Services Systems Manager Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in Organizations.)</p>
**/
export class ResourceDataSyncSourceWithState extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsOrganizationsSource" })
  awsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  @Metadata({ data: "json, name=EnableAllOpsDataSources" })
  enableAllOpsDataSources?: boolean;

  @Metadata({ data: "json, name=IncludeFutureRegions" })
  includeFutureRegions?: boolean;

  @Metadata({ data: "json, name=SourceRegions" })
  sourceRegions?: string[];

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}
