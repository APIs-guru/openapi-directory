import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationDescription } from "./associationdescription";


export class DescribeAssociationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationDescription" })
  associationDescription?: AssociationDescription;
}
