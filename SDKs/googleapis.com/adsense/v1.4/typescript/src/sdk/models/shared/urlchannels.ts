import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlChannel } from "./urlchannel";



export class UrlChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: UrlChannel })
  items?: UrlChannel[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
