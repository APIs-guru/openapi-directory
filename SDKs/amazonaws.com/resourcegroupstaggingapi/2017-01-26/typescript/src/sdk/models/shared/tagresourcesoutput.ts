import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";



export class TagResourcesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedResourcesMap", elemType: FailureInfo })
  failedResourcesMap?: Map<string, FailureInfo>;
}
