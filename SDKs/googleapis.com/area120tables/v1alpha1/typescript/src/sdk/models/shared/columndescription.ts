import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DateDetails } from "./datedetails";
import { LabeledItem } from "./labeleditem";
import { LookupDetails } from "./lookupdetails";
import { RelationshipDetails } from "./relationshipdetails";


// ColumnDescription
/** 
 * Details on a column in the table.
**/
export class ColumnDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=dateDetails" })
  dateDetails?: DateDetails;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.LabeledItem })
  labels?: LabeledItem[];

  @Metadata({ data: "json, name=lookupDetails" })
  lookupDetails?: LookupDetails;

  @Metadata({ data: "json, name=multipleValuesDisallowed" })
  multipleValuesDisallowed?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=readonly" })
  readonly?: boolean;

  @Metadata({ data: "json, name=relationshipDetails" })
  relationshipDetails?: RelationshipDetails;
}
