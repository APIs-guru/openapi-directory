import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Section } from "./section";


export class SectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Section;
}
