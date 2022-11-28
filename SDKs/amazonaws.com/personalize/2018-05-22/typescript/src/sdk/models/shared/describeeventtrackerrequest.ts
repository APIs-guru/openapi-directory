import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEventTrackerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTrackerArn" })
  eventTrackerArn: string;
}
