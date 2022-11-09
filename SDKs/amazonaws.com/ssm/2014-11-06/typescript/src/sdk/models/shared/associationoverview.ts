import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssociationOverview
/** 
 * Information about the association.
**/
export class AssociationOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationStatusAggregatedCount" })
  associationStatusAggregatedCount?: Map<string, number>;

  @Metadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
