import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LfTagError } from "./lftagerror";



export class AddLfTagsToResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Failures", elemType: LfTagError })
  failures?: LfTagError[];
}
