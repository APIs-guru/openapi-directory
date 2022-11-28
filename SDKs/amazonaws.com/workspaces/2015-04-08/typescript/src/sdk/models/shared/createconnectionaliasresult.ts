import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateConnectionAliasResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId?: string;
}
