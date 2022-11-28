import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamSessionClient } from "./livestreamsessionclient";
import { LiveStreamSessionDevice } from "./livestreamsessiondevice";
import { LiveStreamSessionLocation } from "./livestreamsessionlocation";
import { VideoSessionOs } from "./videosessionos";
import { LiveStreamSessionReferrer } from "./livestreamsessionreferrer";
import { LiveStreamSessionSession } from "./livestreamsessionsession";



export class LiveStreamSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: LiveStreamSessionClient;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: LiveStreamSessionDevice;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: LiveStreamSessionLocation;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: VideoSessionOs;

  @SpeakeasyMetadata({ data: "json, name=referrer" })
  referrer?: LiveStreamSessionReferrer;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: LiveStreamSessionSession;
}
