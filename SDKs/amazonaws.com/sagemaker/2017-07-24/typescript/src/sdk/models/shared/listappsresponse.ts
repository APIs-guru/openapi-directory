import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppDetails } from "./appdetails";


export class ListAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Apps", elemType: shared.AppDetails })
  apps?: AppDetails[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
