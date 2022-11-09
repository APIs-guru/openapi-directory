import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchPlaceIndexForTextSummary
/** 
 * A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.
**/
export class SearchPlaceIndexForTextSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=BiasPosition" })
  biasPosition?: number[];

  @Metadata({ data: "json, name=DataSource" })
  dataSource: string;

  @Metadata({ data: "json, name=FilterBBox" })
  filterBBox?: number[];

  @Metadata({ data: "json, name=FilterCountries" })
  filterCountries?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=ResultBBox" })
  resultBBox?: number[];

  @Metadata({ data: "json, name=Text" })
  text: string;
}
