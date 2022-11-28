import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionStateEnum } from "./streamingsessionstateenum";
import { StreamingSessionStatusCodeEnum } from "./streamingsessionstatuscodeenum";
export declare class StreamingSession extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    createdBy?: string;
    ec2InstanceType?: string;
    launchProfileId?: string;
    ownedBy?: string;
    sessionId?: string;
    state?: StreamingSessionStateEnum;
    statusCode?: StreamingSessionStatusCodeEnum;
    statusMessage?: string;
    streamingImageId?: string;
    tags?: Map<string, string>;
    terminateAt?: Date;
    updatedAt?: Date;
    updatedBy?: string;
}
