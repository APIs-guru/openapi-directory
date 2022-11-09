import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateConnectionAliasRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;
}
