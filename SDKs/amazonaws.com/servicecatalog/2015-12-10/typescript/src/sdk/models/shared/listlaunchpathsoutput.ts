import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchPathSummary } from "./launchpathsummary";



export class ListLaunchPathsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LaunchPathSummaries", elemType: LaunchPathSummary })
  launchPathSummaries?: LaunchPathSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
