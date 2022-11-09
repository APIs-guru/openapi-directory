import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiveStreamSessionClient } from "./livestreamsessionclient";
import { LiveStreamSessionDevice } from "./livestreamsessiondevice";
import { LiveStreamSessionLocation } from "./livestreamsessionlocation";
import { VideoSessionOs } from "./videosessionos";
import { LiveStreamSessionReferrer } from "./livestreamsessionreferrer";
import { LiveStreamSessionSession } from "./livestreamsessionsession";


export class LiveStreamSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=client" })
  client?: LiveStreamSessionClient;

  @Metadata({ data: "json, name=device" })
  device?: LiveStreamSessionDevice;

  @Metadata({ data: "json, name=location" })
  location?: LiveStreamSessionLocation;

  @Metadata({ data: "json, name=os" })
  os?: VideoSessionOs;

  @Metadata({ data: "json, name=referrer" })
  referrer?: LiveStreamSessionReferrer;

  @Metadata({ data: "json, name=session" })
  session?: LiveStreamSessionSession;
}
