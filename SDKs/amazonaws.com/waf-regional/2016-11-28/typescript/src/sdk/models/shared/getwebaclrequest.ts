import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWebAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
