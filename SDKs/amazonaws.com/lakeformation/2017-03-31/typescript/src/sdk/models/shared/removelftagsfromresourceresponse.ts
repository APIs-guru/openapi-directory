import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LfTagError } from "./lftagerror";


export class RemoveLfTagsFromResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Failures", elemType: shared.LfTagError })
  failures?: LfTagError[];
}
