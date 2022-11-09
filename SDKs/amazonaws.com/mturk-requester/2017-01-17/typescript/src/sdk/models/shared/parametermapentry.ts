import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterMapEntry
/** 
 *  This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy. 
**/
export class ParameterMapEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
