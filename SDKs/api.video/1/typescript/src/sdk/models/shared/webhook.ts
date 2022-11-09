import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=webhookId" })
  webhookId?: string;
}
