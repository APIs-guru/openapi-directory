import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateDetails } from "./datedetails";
import { LabeledItem } from "./labeleditem";
import { LookupDetails } from "./lookupdetails";
import { RelationshipDetails } from "./relationshipdetails";



// ColumnDescription
/** 
 * Details on a column in the table.
**/
export class ColumnDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=dateDetails" })
  dateDetails?: DateDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: LabeledItem })
  labels?: LabeledItem[];

  @SpeakeasyMetadata({ data: "json, name=lookupDetails" })
  lookupDetails?: LookupDetails;

  @SpeakeasyMetadata({ data: "json, name=multipleValuesDisallowed" })
  multipleValuesDisallowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=readonly" })
  readonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=relationshipDetails" })
  relationshipDetails?: RelationshipDetails;
}
