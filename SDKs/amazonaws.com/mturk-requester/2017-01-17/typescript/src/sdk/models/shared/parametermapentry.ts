import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterMapEntry
/** 
 *  This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy. 
**/
export class ParameterMapEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
