import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobSecondaryStatusEnum } from "./automljobsecondarystatusenum";
import { AutoMlJobStatusEnum } from "./automljobstatusenum";
import { AutoMlPartialFailureReason } from "./automlpartialfailurereason";



// AutoMlJobSummary
/** 
 * Provides a summary about an AutoML job.
**/
export class AutoMlJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobSecondaryStatus" })
  autoMlJobSecondaryStatus: AutoMlJobSecondaryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobStatus" })
  autoMlJobStatus: AutoMlJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=PartialFailureReasons", elemType: AutoMlPartialFailureReason })
  partialFailureReasons?: AutoMlPartialFailureReason[];
}
