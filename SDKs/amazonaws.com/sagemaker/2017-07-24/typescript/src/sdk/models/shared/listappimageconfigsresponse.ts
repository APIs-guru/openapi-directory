import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppImageConfigDetails } from "./appimageconfigdetails";


export class ListAppImageConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppImageConfigs", elemType: shared.AppImageConfigDetails })
  appImageConfigs?: AppImageConfigDetails[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
