import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LfTagError } from "./lftagerror";


export class AddLfTagsToResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Failures", elemType: shared.LfTagError })
  failures?: LfTagError[];
}
