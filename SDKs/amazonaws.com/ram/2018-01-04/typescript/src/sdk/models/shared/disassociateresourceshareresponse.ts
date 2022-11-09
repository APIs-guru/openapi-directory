import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceShareAssociation } from "./resourceshareassociation";


export class DisassociateResourceShareResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=resourceShareAssociations", elemType: shared.ResourceShareAssociation })
  resourceShareAssociations?: ResourceShareAssociation[];
}
