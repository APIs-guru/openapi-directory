import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SectionResponse } from "./sectionresponse";


export class SectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.SectionResponse })
  data?: SectionResponse[];
}
