import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateConnectionAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId: string;
}
