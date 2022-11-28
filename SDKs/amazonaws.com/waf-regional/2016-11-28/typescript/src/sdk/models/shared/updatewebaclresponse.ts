import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateWebAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
