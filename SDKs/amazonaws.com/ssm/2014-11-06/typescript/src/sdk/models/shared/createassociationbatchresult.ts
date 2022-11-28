import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedCreateAssociation } from "./failedcreateassociation";
import { AssociationDescription } from "./associationdescription";



export class CreateAssociationBatchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Failed", elemType: FailedCreateAssociation })
  failed?: FailedCreateAssociation[];

  @SpeakeasyMetadata({ data: "json, name=Successful", elemType: AssociationDescription })
  successful?: AssociationDescription[];
}
