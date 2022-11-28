import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectTextFilters } from "./detecttextfilters";
import { Image } from "./image";



export class DetectTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: DetectTextFilters;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;
}
