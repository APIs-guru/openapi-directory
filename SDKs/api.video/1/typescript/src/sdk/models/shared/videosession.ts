import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoSessionClient } from "./videosessionclient";
import { VideoSessionDevice } from "./videosessiondevice";
import { VideoSessionLocation } from "./videosessionlocation";
import { VideoSessionOs } from "./videosessionos";
import { VideoSessionReferrer } from "./videosessionreferrer";
import { VideoSessionSession } from "./videosessionsession";


export class VideoSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=client" })
  client?: VideoSessionClient;

  @Metadata({ data: "json, name=device" })
  device?: VideoSessionDevice;

  @Metadata({ data: "json, name=location" })
  location?: VideoSessionLocation;

  @Metadata({ data: "json, name=os" })
  os?: VideoSessionOs;

  @Metadata({ data: "json, name=referrer" })
  referrer?: VideoSessionReferrer;

  @Metadata({ data: "json, name=session" })
  session?: VideoSessionSession;
}
