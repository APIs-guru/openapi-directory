import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateOpsItemRelatedItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId: string;

  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId: string;
}
