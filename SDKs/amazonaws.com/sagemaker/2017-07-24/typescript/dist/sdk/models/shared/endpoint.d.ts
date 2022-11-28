import { SpeakeasyBase } from "../../../internal/utils";
import { DataCaptureConfigSummary } from "./datacaptureconfigsummary";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { MonitoringSchedule } from "./monitoringschedule";
import { ProductionVariantSummary } from "./productionvariantsummary";
import { Tag } from "./tag";
/**
 * A hosted endpoint for real-time inference.
**/
export declare class Endpoint extends SpeakeasyBase {
    creationTime: Date;
    dataCaptureConfig?: DataCaptureConfigSummary;
    endpointArn: string;
    endpointConfigName: string;
    endpointName: string;
    endpointStatus: EndpointStatusEnum;
    failureReason?: string;
    lastModifiedTime: Date;
    monitoringSchedules?: MonitoringSchedule[];
    productionVariants?: ProductionVariantSummary[];
    tags?: Tag[];
}
