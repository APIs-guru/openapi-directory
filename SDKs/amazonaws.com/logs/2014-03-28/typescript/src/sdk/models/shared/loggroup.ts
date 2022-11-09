import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogGroup
/** 
 * Represents a log group.
**/
export class LogGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=metricFilterCount" })
  metricFilterCount?: number;

  @Metadata({ data: "json, name=retentionInDays" })
  retentionInDays?: number;

  @Metadata({ data: "json, name=storedBytes" })
  storedBytes?: number;
}
