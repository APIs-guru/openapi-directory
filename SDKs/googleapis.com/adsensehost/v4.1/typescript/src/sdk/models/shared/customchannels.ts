import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomChannel } from "./customchannel";



export class CustomChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CustomChannel })
  items?: CustomChannel[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
