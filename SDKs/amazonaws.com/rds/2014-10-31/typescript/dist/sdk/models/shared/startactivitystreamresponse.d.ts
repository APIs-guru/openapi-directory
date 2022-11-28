import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";
export declare class StartActivityStreamResponse extends SpeakeasyBase {
    applyImmediately?: boolean;
    engineNativeAuditFieldsIncluded?: boolean;
    kinesisStreamName?: string;
    kmsKeyId?: string;
    mode?: ActivityStreamModeEnum;
    status?: ActivityStreamStatusEnum;
}
