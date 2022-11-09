import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedCreateAssociation } from "./failedcreateassociation";
import { AssociationDescription } from "./associationdescription";


export class CreateAssociationBatchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Failed", elemType: shared.FailedCreateAssociation })
  failed?: FailedCreateAssociation[];

  @Metadata({ data: "json, name=Successful", elemType: shared.AssociationDescription })
  successful?: AssociationDescription[];
}
