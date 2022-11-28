import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionStreamStateEnum } from "./streamingsessionstreamstateenum";
import { StreamingSessionStreamStatusCodeEnum } from "./streamingsessionstreamstatuscodeenum";
export declare class StreamingSessionStream extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    expiresAt?: Date;
    ownedBy?: string;
    state?: StreamingSessionStreamStateEnum;
    statusCode?: StreamingSessionStreamStatusCodeEnum;
    streamId?: string;
    url?: string;
}
