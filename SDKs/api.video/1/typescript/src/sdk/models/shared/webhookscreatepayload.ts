import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WebhooksCreatePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=events" })
  events: string[];

  @Metadata({ data: "json, name=url" })
  url: string;
}
