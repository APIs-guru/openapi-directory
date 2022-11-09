import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAliasRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasName" })
  aliasName: string;
}
