import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceAggregatedAssociationOverview
/** 
 * Status information about the aggregated associations.
**/
export class InstanceAggregatedAssociationOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @Metadata({ data: "json, name=InstanceAssociationStatusAggregatedCount" })
  instanceAssociationStatusAggregatedCount?: Map<string, number>;
}
