import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceSummary } from "./resourcesummary";



export class ListDeviceResourcesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ResourceSummary })
  resources?: ResourceSummary[];
}
