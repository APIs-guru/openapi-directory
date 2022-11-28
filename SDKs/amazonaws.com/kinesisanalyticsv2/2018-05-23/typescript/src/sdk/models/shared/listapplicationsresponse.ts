import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";



export class ListApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationSummaries", elemType: ApplicationSummary })
  applicationSummaries: ApplicationSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
