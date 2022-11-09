import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateConnectionAliasRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
