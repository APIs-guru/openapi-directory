import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWebAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
