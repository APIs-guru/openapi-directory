import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationDescription } from "./associationdescription";



export class UpdateAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationDescription" })
  associationDescription?: AssociationDescription;
}
