import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItemScheduleList extends SpeakeasyBase {
    channelId: string;
    endDate: Date;
    schedules: Map<string, any>[];
    startDate: Date;
}
