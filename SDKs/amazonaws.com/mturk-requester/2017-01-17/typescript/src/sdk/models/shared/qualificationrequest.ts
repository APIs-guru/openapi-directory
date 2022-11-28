import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QualificationRequest
/** 
 *  The QualificationRequest data structure represents a request a Worker has made for a Qualification. 
**/
export class QualificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=QualificationRequestId" })
  qualificationRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Test" })
  test?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
