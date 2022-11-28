import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LfTagError } from "./lftagerror";



export class RemoveLfTagsFromResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Failures", elemType: LfTagError })
  failures?: LfTagError[];
}
