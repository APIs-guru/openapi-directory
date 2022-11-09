import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTrackerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=TrackerArn" })
  trackerArn: string;

  @Metadata({ data: "json, name=TrackerName" })
  trackerName: string;
}
