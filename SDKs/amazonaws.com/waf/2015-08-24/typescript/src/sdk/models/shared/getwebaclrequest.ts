import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWebAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
