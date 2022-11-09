import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyDetectorConfigSummary } from "./anomalydetectorconfigsummary";
import { AnomalyDetectorStatusEnum } from "./anomalydetectorstatusenum";


export class DescribeAnomalyDetectorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @Metadata({ data: "json, name=AnomalyDetectorConfig" })
  anomalyDetectorConfig?: AnomalyDetectorConfigSummary;

  @Metadata({ data: "json, name=AnomalyDetectorDescription" })
  anomalyDetectorDescription?: string;

  @Metadata({ data: "json, name=AnomalyDetectorName" })
  anomalyDetectorName?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: AnomalyDetectorStatusEnum;
}
