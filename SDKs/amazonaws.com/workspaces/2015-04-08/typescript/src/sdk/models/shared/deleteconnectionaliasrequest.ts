import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConnectionAliasRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;
}
