import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationVersionSummary } from "./applicationversionsummary";


export class ListApplicationVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationVersionSummaries", elemType: shared.ApplicationVersionSummary })
  applicationVersionSummaries?: ApplicationVersionSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
