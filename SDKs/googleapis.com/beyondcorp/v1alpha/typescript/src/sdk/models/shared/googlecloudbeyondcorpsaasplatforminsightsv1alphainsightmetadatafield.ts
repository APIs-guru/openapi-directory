import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField
/** 
 * Field metadata. Commonly understandable name and description for the field. Multiple such fields constitute the Insight.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=filterAlias" })
  filterAlias?: string;

  @Metadata({ data: "json, name=filterable" })
  filterable?: boolean;

  @Metadata({ data: "json, name=groupable" })
  groupable?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
