import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReviewResultDetail
/** 
 *  This data structure is returned multiple times for each result specified in the Review Policy. 
**/
export class ReviewResultDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionId" })
  actionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionId" })
  questionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubjectId" })
  subjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubjectType" })
  subjectType?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
