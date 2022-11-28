import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventCategoriesMap extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
