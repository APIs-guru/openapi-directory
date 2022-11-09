import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeActivityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityArn" })
  activityArn: string;
}
