import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateConnectionAliasResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId?: string;
}
