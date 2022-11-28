import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncAwsOrganizationsSource } from "./resourcedatasyncawsorganizationssource";
/**
 * Information about the source of the data included in the resource data sync.
**/
export declare class ResourceDataSyncSource extends SpeakeasyBase {
    awsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
    enableAllOpsDataSources?: boolean;
    includeFutureRegions?: boolean;
    sourceRegions: string[];
    sourceType: string;
}
