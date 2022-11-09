import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LaunchPathSummary } from "./launchpathsummary";


export class ListLaunchPathsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LaunchPathSummaries", elemType: shared.LaunchPathSummary })
  launchPathSummaries?: LaunchPathSummary[];

  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
