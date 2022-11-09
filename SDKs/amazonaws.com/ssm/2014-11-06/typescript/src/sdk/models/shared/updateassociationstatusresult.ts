import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationDescription } from "./associationdescription";


export class UpdateAssociationStatusResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationDescription" })
  associationDescription?: AssociationDescription;
}
