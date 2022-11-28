import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateConnectionAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
