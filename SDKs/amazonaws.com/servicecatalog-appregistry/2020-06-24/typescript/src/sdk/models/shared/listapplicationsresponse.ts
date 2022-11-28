import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";



export class ListApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applications", elemType: ApplicationSummary })
  applications?: ApplicationSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
