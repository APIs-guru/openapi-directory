import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";
export declare class StopActivityStreamResponse extends SpeakeasyBase {
    kinesisStreamName?: string;
    kmsKeyId?: string;
    status?: ActivityStreamStatusEnum;
}
