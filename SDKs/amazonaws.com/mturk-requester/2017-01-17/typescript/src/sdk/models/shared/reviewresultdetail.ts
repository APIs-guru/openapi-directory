import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReviewResultDetail
/** 
 *  This data structure is returned multiple times for each result specified in the Review Policy. 
**/
export class ReviewResultDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionId" })
  actionId?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=QuestionId" })
  questionId?: string;

  @Metadata({ data: "json, name=SubjectId" })
  subjectId?: string;

  @Metadata({ data: "json, name=SubjectType" })
  subjectType?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
