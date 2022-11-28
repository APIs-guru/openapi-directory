import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId?: string;
}
