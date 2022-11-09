import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationSummary } from "./applicationsummary";


// ListApplicationsResponse
/** 
 * <p/>
**/
export class ListApplicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationSummaries", elemType: shared.ApplicationSummary })
  applicationSummaries: ApplicationSummary[];

  @Metadata({ data: "json, name=HasMoreApplications" })
  hasMoreApplications: boolean;
}
