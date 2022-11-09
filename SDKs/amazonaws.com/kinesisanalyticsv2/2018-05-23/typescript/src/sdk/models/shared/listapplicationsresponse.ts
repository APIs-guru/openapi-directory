import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationSummary } from "./applicationsummary";


export class ListApplicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationSummaries", elemType: shared.ApplicationSummary })
  applicationSummaries: ApplicationSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
