import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Plan } from "./plan";
import { Tag } from "./tag";
import { ContactTypeEnum } from "./contacttypeenum";



export class CreateContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Plan" })
  plan: Plan;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ContactTypeEnum;
}
