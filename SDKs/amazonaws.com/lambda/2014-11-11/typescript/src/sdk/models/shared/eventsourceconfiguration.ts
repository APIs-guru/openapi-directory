import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventSourceConfiguration
/** 
 * Describes mapping between an Amazon Kinesis stream and a Lambda function.
**/
export class EventSourceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @Metadata({ data: "json, name=EventSource" })
  eventSource?: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @Metadata({ data: "json, name=IsActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=UUID" })
  uuid?: string;
}
