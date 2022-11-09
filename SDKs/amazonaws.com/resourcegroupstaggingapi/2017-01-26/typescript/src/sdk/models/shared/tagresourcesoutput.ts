import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailureInfo } from "./failureinfo";


export class TagResourcesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedResourcesMap", elemType: shared.FailureInfo })
  failedResourcesMap?: Map<string, FailureInfo>;
}
