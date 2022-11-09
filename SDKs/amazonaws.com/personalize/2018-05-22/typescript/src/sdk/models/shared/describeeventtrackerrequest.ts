import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEventTrackerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTrackerArn" })
  eventTrackerArn: string;
}
