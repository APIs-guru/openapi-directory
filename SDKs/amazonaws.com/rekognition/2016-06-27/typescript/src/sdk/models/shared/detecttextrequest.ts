import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectTextFilters } from "./detecttextfilters";
import { Image } from "./image";


export class DetectTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters?: DetectTextFilters;

  @Metadata({ data: "json, name=Image" })
  image: Image;
}
