import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



export class GetAssociatedResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Resource;
}
