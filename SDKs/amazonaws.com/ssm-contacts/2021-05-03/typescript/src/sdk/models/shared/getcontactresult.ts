import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Plan } from "./plan";
import { ContactTypeEnum } from "./contacttypeenum";


export class GetContactResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias: string;

  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Plan" })
  plan: Plan;

  @Metadata({ data: "json, name=Type" })
  type: ContactTypeEnum;
}
