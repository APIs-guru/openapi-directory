import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QualificationRequest
/** 
 *  The QualificationRequest data structure represents a request a Worker has made for a Qualification. 
**/
export class QualificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Answer" })
  answer?: string;

  @Metadata({ data: "json, name=QualificationRequestId" })
  qualificationRequestId?: string;

  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId?: string;

  @Metadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;

  @Metadata({ data: "json, name=Test" })
  test?: string;

  @Metadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
