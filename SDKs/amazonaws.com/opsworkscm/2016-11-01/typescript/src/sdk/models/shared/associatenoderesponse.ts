import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateNodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NodeAssociationStatusToken" })
  nodeAssociationStatusToken?: string;
}
