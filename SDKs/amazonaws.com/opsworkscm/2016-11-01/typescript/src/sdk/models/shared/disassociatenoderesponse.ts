import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateNodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NodeAssociationStatusToken" })
  nodeAssociationStatusToken?: string;
}
