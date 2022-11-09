import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataCaptureConfigSummary } from "./datacaptureconfigsummary";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { MonitoringSchedule } from "./monitoringschedule";
import { ProductionVariantSummary } from "./productionvariantsummary";
import { Tag } from "./tag";


// Endpoint
/** 
 * A hosted endpoint for real-time inference.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=DataCaptureConfig" })
  dataCaptureConfig?: DataCaptureConfigSummary;

  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @Metadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=EndpointStatus" })
  endpointStatus: EndpointStatusEnum;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=MonitoringSchedules", elemType: shared.MonitoringSchedule })
  monitoringSchedules?: MonitoringSchedule[];

  @Metadata({ data: "json, name=ProductionVariants", elemType: shared.ProductionVariantSummary })
  productionVariants?: ProductionVariantSummary[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
