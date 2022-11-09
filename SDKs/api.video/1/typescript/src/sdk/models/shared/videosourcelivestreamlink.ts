import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoSourceLiveStreamLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=rel" })
  rel?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
