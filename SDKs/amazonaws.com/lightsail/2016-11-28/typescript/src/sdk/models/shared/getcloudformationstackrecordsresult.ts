import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudFormationStackRecord } from "./cloudformationstackrecord";


export class GetCloudFormationStackRecordsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudFormationStackRecords", elemType: shared.CloudFormationStackRecord })
  cloudFormationStackRecords?: CloudFormationStackRecord[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
