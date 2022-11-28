import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppImageConfigDetails } from "./appimageconfigdetails";



export class ListAppImageConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppImageConfigs", elemType: AppImageConfigDetails })
  appImageConfigs?: AppImageConfigDetails[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
