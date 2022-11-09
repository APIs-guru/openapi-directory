import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WafAction } from "./wafaction";
import { WebAclUpdate } from "./webaclupdate";


export class UpdateWebAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=DefaultAction" })
  defaultAction?: WafAction;

  @Metadata({ data: "json, name=Updates", elemType: shared.WebAclUpdate })
  updates?: WebAclUpdate[];

  @Metadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
