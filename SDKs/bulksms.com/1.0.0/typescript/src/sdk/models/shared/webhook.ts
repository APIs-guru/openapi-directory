import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contactEmailAddress" })
  contactEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onWebApp" })
  onWebApp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=triggerScope" })
  triggerScope?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
