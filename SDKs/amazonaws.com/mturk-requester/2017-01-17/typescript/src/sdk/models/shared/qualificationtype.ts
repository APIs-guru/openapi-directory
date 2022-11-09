import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QualificationTypeStatusEnum } from "./qualificationtypestatusenum";


// QualificationType
/** 
 *  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. 
**/
export class QualificationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnswerKey" })
  answerKey?: string;

  @Metadata({ data: "json, name=AutoGranted" })
  autoGranted?: boolean;

  @Metadata({ data: "json, name=AutoGrantedValue" })
  autoGrantedValue?: number;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsRequestable" })
  isRequestable?: boolean;

  @Metadata({ data: "json, name=Keywords" })
  keywords?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId?: string;

  @Metadata({ data: "json, name=QualificationTypeStatus" })
  qualificationTypeStatus?: QualificationTypeStatusEnum;

  @Metadata({ data: "json, name=RetryDelayInSeconds" })
  retryDelayInSeconds?: number;

  @Metadata({ data: "json, name=Test" })
  test?: string;

  @Metadata({ data: "json, name=TestDurationInSeconds" })
  testDurationInSeconds?: number;
}
