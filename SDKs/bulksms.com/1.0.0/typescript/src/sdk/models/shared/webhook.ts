import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=contactEmailAddress" })
  contactEmailAddress?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onWebApp" })
  onWebApp?: boolean;

  @Metadata({ data: "json, name=triggerScope" })
  triggerScope?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
