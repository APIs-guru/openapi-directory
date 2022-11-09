import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTrackerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrackerArn" })
  trackerArn: string;

  @Metadata({ data: "json, name=TrackerName" })
  trackerName: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
