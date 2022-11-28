import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WafAction } from "./wafaction";
import { WebAclUpdate } from "./webaclupdate";



export class UpdateWebAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultAction" })
  defaultAction?: WafAction;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: WebAclUpdate })
  updates?: WebAclUpdate[];

  @SpeakeasyMetadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
