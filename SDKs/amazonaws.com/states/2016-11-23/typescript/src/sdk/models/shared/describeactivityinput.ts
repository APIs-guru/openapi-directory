import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeActivityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityArn" })
  activityArn: string;
}
