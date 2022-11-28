import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DataCaptureConfig" })
  dataCaptureConfig?: DataCaptureConfigSummary;

  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointStatus" })
  endpointStatus: EndpointStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=MonitoringSchedules", elemType: MonitoringSchedule })
  monitoringSchedules?: MonitoringSchedule[];

  @SpeakeasyMetadata({ data: "json, name=ProductionVariants", elemType: ProductionVariantSummary })
  productionVariants?: ProductionVariantSummary[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
