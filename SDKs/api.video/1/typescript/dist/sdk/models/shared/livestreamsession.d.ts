import { SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamSessionClient } from "./livestreamsessionclient";
import { LiveStreamSessionDevice } from "./livestreamsessiondevice";
import { LiveStreamSessionLocation } from "./livestreamsessionlocation";
import { VideoSessionOs } from "./videosessionos";
import { LiveStreamSessionReferrer } from "./livestreamsessionreferrer";
import { LiveStreamSessionSession } from "./livestreamsessionsession";
export declare class LiveStreamSession extends SpeakeasyBase {
    client?: LiveStreamSessionClient;
    device?: LiveStreamSessionDevice;
    location?: LiveStreamSessionLocation;
    os?: VideoSessionOs;
    referrer?: LiveStreamSessionReferrer;
    session?: LiveStreamSessionSession;
}
