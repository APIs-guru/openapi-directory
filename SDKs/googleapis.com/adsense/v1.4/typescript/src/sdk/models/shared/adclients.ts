import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdClient } from "./adclient";



export class AdClients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: AdClient })
  items?: AdClient[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
