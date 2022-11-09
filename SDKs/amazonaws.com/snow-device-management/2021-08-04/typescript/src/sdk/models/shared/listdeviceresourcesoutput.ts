import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceSummary } from "./resourcesummary";


export class ListDeviceResourcesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.ResourceSummary })
  resources?: ResourceSummary[];
}
