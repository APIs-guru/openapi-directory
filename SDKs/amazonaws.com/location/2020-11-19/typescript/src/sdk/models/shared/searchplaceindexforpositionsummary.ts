import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchPlaceIndexForPositionSummary
/** 
 * A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.
**/
export class SearchPlaceIndexForPositionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSource" })
  dataSource: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=Position" })
  position: number[];
}
