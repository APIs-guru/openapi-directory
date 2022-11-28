import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Section } from "./section";



export class SectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Section;
}
