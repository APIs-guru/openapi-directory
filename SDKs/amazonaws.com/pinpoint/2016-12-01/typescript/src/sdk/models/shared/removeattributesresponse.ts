import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributesResource } from "./attributesresource";


export class RemoveAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesResource" })
  attributesResource: AttributesResource;
}
