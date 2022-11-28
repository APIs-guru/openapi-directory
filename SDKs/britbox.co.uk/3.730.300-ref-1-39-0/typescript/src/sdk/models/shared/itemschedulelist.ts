import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItemScheduleList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=schedules" })
  schedules: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;
}
