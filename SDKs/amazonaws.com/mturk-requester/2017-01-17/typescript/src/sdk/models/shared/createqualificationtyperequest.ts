import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualificationTypeStatusEnum } from "./qualificationtypestatusenum";



export class CreateQualificationTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnswerKey" })
  answerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoGranted" })
  autoGranted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoGrantedValue" })
  autoGrantedValue?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Keywords" })
  keywords?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=QualificationTypeStatus" })
  qualificationTypeStatus: QualificationTypeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=RetryDelayInSeconds" })
  retryDelayInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Test" })
  test?: string;

  @SpeakeasyMetadata({ data: "json, name=TestDurationInSeconds" })
  testDurationInSeconds?: number;
}
