import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationStackRecord } from "./cloudformationstackrecord";



export class GetCloudFormationStackRecordsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudFormationStackRecords", elemType: CloudFormationStackRecord })
  cloudFormationStackRecords?: CloudFormationStackRecord[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
