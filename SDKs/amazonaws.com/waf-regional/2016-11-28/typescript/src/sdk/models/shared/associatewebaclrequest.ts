import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateWebAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
