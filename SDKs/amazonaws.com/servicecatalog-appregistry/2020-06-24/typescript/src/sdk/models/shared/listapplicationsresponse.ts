import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationSummary } from "./applicationsummary";


export class ListApplicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applications", elemType: shared.ApplicationSummary })
  applications?: ApplicationSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
