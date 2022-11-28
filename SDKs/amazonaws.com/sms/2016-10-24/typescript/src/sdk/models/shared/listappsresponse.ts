import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppSummary } from "./appsummary";



export class ListAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: AppSummary })
  apps?: AppSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
