import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { PolicyTypeEnum } from "./policytypeenum";


export class CreatePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content" })
  content: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Type" })
  type: PolicyTypeEnum;
}
