import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IgnoresIgnoreResponse } from "./ignoresignoreresponse";



export class TagsModelsContractsTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ignoreStatus?: IgnoresIgnoreResponse;

  @SpeakeasyMetadata()
  tagText?: string;
}
