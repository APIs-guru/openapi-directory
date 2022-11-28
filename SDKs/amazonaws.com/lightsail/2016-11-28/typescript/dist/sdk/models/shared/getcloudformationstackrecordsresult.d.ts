import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationStackRecord } from "./cloudformationstackrecord";
export declare class GetCloudFormationStackRecordsResult extends SpeakeasyBase {
    cloudFormationStackRecords?: CloudFormationStackRecord[];
    nextPageToken?: string;
}
