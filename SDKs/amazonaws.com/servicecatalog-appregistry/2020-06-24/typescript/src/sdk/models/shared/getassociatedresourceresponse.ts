import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Resource } from "./resource";


export class GetAssociatedResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: Resource;
}
