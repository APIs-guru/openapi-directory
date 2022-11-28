import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebhookEntryInvokeOptionEnum {
    One = "ONE",
    Many = "MANY"
}

export enum WebhookEntryTriggerScopeEnum {
    Sent = "SENT",
    Received = "RECEIVED"
}


export class WebhookEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contactEmailAddress" })
  contactEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=invokeOption" })
  invokeOption?: WebhookEntryInvokeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=onWebApp" })
  onWebApp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=triggerScope" })
  triggerScope: WebhookEntryTriggerScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
