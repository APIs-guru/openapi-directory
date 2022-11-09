import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLName" })
  aclName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserNames" })
  userNames?: string[];
}
