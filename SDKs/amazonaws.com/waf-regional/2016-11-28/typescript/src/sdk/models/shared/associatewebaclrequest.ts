import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateWebAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
