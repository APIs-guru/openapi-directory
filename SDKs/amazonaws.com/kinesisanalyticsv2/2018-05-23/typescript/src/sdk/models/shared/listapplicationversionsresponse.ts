import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionSummary } from "./applicationversionsummary";



export class ListApplicationVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionSummaries", elemType: ApplicationVersionSummary })
  applicationVersionSummaries?: ApplicationVersionSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
