import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { PolicyTypeEnum } from "./policytypeenum";



export class CreatePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: PolicyTypeEnum;
}
