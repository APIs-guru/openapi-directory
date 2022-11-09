import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QualificationTypeStatusEnum } from "./qualificationtypestatusenum";


export class UpdateQualificationTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnswerKey" })
  answerKey?: string;

  @Metadata({ data: "json, name=AutoGranted" })
  autoGranted?: boolean;

  @Metadata({ data: "json, name=AutoGrantedValue" })
  autoGrantedValue?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @Metadata({ data: "json, name=QualificationTypeStatus" })
  qualificationTypeStatus?: QualificationTypeStatusEnum;

  @Metadata({ data: "json, name=RetryDelayInSeconds" })
  retryDelayInSeconds?: number;

  @Metadata({ data: "json, name=Test" })
  test?: string;

  @Metadata({ data: "json, name=TestDurationInSeconds" })
  testDurationInSeconds?: number;
}
