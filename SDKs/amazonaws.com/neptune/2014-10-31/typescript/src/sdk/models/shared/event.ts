import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



// Event
/** 
 *  This data type is used as a response element in the <a>DescribeEvents</a> action.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata()
  date?: Date;

  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  sourceArn?: string;

  @SpeakeasyMetadata()
  sourceIdentifier?: string;

  @SpeakeasyMetadata()
  sourceType?: SourceTypeEnum;
}
