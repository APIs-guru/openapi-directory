import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppSummary } from "./appsummary";


export class ListAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.AppSummary })
  apps?: AppSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
