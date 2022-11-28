import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTrackerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrackerArn" })
  trackerArn: string;

  @SpeakeasyMetadata({ data: "json, name=TrackerName" })
  trackerName: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
