import { SpeakeasyBase } from "../../../internal/utils";
import { VideoSessionClient } from "./videosessionclient";
import { VideoSessionDevice } from "./videosessiondevice";
import { VideoSessionLocation } from "./videosessionlocation";
import { VideoSessionOs } from "./videosessionos";
import { VideoSessionReferrer } from "./videosessionreferrer";
import { VideoSessionSession } from "./videosessionsession";
export declare class VideoSession extends SpeakeasyBase {
    client?: VideoSessionClient;
    device?: VideoSessionDevice;
    location?: VideoSessionLocation;
    os?: VideoSessionOs;
    referrer?: VideoSessionReferrer;
    session?: VideoSessionSession;
}
