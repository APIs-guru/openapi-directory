import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";



// CreateApplicationResponse
/** 
 * TBD
**/
export class CreateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationSummary" })
  applicationSummary: ApplicationSummary;
}
