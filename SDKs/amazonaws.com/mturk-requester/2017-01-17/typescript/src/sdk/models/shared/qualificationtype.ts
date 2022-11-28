import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualificationTypeStatusEnum } from "./qualificationtypestatusenum";



// QualificationType
/** 
 *  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. 
**/
export class QualificationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnswerKey" })
  answerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoGranted" })
  autoGranted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoGrantedValue" })
  autoGrantedValue?: number;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsRequestable" })
  isRequestable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Keywords" })
  keywords?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=QualificationTypeStatus" })
  qualificationTypeStatus?: QualificationTypeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=RetryDelayInSeconds" })
  retryDelayInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Test" })
  test?: string;

  @SpeakeasyMetadata({ data: "json, name=TestDurationInSeconds" })
  testDurationInSeconds?: number;
}
