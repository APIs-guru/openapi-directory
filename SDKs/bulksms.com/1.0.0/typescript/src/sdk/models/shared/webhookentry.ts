import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebhookEntryInvokeOptionEnum {
    One = "ONE"
,    Many = "MANY"
}

export enum WebhookEntryTriggerScopeEnum {
    Sent = "SENT"
,    Received = "RECEIVED"
}


export class WebhookEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=contactEmailAddress" })
  contactEmailAddress?: string;

  @Metadata({ data: "json, name=invokeOption" })
  invokeOption?: WebhookEntryInvokeOptionEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=onWebApp" })
  onWebApp?: boolean;

  @Metadata({ data: "json, name=triggerScope" })
  triggerScope: WebhookEntryTriggerScopeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
