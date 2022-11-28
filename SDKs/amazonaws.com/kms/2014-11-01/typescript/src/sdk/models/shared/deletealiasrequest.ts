import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasName" })
  aliasName: string;
}
