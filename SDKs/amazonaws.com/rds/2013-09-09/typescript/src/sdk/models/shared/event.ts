import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata()
  date?: Date;

  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  sourceIdentifier?: string;

  @SpeakeasyMetadata()
  sourceType?: SourceTypeEnum;
}
