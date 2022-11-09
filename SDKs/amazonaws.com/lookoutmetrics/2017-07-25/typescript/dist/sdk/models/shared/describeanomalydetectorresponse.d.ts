import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyDetectorConfigSummary } from "./anomalydetectorconfigsummary";
import { AnomalyDetectorStatusEnum } from "./anomalydetectorstatusenum";
export declare class DescribeAnomalyDetectorResponse extends SpeakeasyBase {
    anomalyDetectorArn?: string;
    anomalyDetectorConfig?: AnomalyDetectorConfigSummary;
    anomalyDetectorDescription?: string;
    anomalyDetectorName?: string;
    creationTime?: Date;
    failureReason?: string;
    kmsKeyArn?: string;
    lastModificationTime?: Date;
    status?: AnomalyDetectorStatusEnum;
}
