import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppDetails } from "./appdetails";



export class ListAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Apps", elemType: AppDetails })
  apps?: AppDetails[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
