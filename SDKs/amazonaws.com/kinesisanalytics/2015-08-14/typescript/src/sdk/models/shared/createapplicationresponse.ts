import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationSummary } from "./applicationsummary";


// CreateApplicationResponse
/** 
 * TBD
**/
export class CreateApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationSummary" })
  applicationSummary: ApplicationSummary;
}
