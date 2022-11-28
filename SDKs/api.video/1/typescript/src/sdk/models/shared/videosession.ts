import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoSessionClient } from "./videosessionclient";
import { VideoSessionDevice } from "./videosessiondevice";
import { VideoSessionLocation } from "./videosessionlocation";
import { VideoSessionOs } from "./videosessionos";
import { VideoSessionReferrer } from "./videosessionreferrer";
import { VideoSessionSession } from "./videosessionsession";



export class VideoSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: VideoSessionClient;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: VideoSessionDevice;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: VideoSessionLocation;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: VideoSessionOs;

  @SpeakeasyMetadata({ data: "json, name=referrer" })
  referrer?: VideoSessionReferrer;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: VideoSessionSession;
}
