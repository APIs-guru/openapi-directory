import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventSourceConfiguration
/** 
 * Describes mapping between an Amazon Kinesis stream and a Lambda function.
**/
export class EventSourceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=EventSource" })
  eventSource?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=IsActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=UUID" })
  uuid?: string;
}
