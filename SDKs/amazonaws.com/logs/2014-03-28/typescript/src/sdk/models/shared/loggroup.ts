import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogGroup
/** 
 * Represents a log group.
**/
export class LogGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricFilterCount" })
  metricFilterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=retentionInDays" })
  retentionInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=storedBytes" })
  storedBytes?: number;
}
