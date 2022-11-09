import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoMlJobSecondaryStatusEnum } from "./automljobsecondarystatusenum";
import { AutoMlJobStatusEnum } from "./automljobstatusenum";
import { AutoMlPartialFailureReason } from "./automlpartialfailurereason";


// AutoMlJobSummary
/** 
 * Provides a summary about an AutoML job.
**/
export class AutoMlJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn: string;

  @Metadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;

  @Metadata({ data: "json, name=AutoMLJobSecondaryStatus" })
  autoMlJobSecondaryStatus: AutoMlJobSecondaryStatusEnum;

  @Metadata({ data: "json, name=AutoMLJobStatus" })
  autoMlJobStatus: AutoMlJobStatusEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=PartialFailureReasons", elemType: shared.AutoMlPartialFailureReason })
  partialFailureReasons?: AutoMlPartialFailureReason[];
}
