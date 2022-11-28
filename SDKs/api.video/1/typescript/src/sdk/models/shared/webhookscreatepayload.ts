import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhooksCreatePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events" })
  events: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
