import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateConnectionAliasResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionIdentifier" })
  connectionIdentifier?: string;
}
