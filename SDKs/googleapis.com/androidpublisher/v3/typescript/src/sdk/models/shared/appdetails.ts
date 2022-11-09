import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppDetails
/** 
 * The app details. The resource for DetailsService.
**/
export class AppDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @Metadata({ data: "json, name=contactPhone" })
  contactPhone?: string;

  @Metadata({ data: "json, name=contactWebsite" })
  contactWebsite?: string;

  @Metadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;
}
