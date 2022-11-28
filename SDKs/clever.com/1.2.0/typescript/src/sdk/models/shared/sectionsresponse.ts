import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SectionResponse } from "./sectionresponse";



export class SectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: SectionResponse })
  data?: SectionResponse[];
}
