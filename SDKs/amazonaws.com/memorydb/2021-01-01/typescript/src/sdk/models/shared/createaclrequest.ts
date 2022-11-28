import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLName" })
  aclName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserNames" })
  userNames?: string[];
}
