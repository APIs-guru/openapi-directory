import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributesResource } from "./attributesresource";



export class RemoveAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesResource" })
  attributesResource: AttributesResource;
}
