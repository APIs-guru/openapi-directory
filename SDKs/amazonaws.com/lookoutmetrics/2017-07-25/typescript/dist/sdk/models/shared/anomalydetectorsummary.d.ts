import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorStatusEnum } from "./anomalydetectorstatusenum";
/**
 * Contains information about an an anomaly detector.
**/
export declare class AnomalyDetectorSummary extends SpeakeasyBase {
    anomalyDetectorArn?: string;
    anomalyDetectorDescription?: string;
    anomalyDetectorName?: string;
    creationTime?: Date;
    lastModificationTime?: Date;
    status?: AnomalyDetectorStatusEnum;
    tags?: Map<string, string>;
}
