import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItemScheduleList extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId: string;

  @Metadata({ data: "json, name=endDate" })
  endDate: Date;

  @Metadata({ data: "json, name=schedules" })
  schedules: Map<string, any>[];

  @Metadata({ data: "json, name=startDate" })
  startDate: Date;
}
