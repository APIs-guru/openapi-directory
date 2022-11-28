import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationDescription } from "./associationdescription";



export class DescribeAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationDescription" })
  associationDescription?: AssociationDescription;
}
