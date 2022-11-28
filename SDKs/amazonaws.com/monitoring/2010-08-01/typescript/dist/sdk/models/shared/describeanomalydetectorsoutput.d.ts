import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetector } from "./anomalydetector";
export declare class DescribeAnomalyDetectorsOutput extends SpeakeasyBase {
    anomalyDetectors?: AnomalyDetector[];
    nextToken?: string;
}
