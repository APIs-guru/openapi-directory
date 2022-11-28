import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTrackerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=TrackerArn" })
  trackerArn: string;

  @SpeakeasyMetadata({ data: "json, name=TrackerName" })
  trackerName: string;
}
