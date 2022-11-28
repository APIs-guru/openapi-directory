import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorConfigSummary } from "./anomalydetectorconfigsummary";
import { AnomalyDetectorStatusEnum } from "./anomalydetectorstatusenum";



export class DescribeAnomalyDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorConfig" })
  anomalyDetectorConfig?: AnomalyDetectorConfigSummary;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorDescription" })
  anomalyDetectorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorName" })
  anomalyDetectorName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AnomalyDetectorStatusEnum;
}
