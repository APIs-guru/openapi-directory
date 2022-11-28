import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Plan } from "./plan";
import { ContactTypeEnum } from "./contacttypeenum";



export class GetContactResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Plan" })
  plan: Plan;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ContactTypeEnum;
}
