import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamProcessorInput } from "./streamprocessorinput";
import { StreamProcessorOutput } from "./streamprocessoroutput";
import { StreamProcessorSettings } from "./streamprocessorsettings";
import { StreamProcessorStatusEnum } from "./streamprocessorstatusenum";



export class DescribeStreamProcessorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Input" })
  input?: StreamProcessorInput;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTimestamp" })
  lastUpdateTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Output" })
  output?: StreamProcessorOutput;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: StreamProcessorSettings;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StreamProcessorStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamProcessorArn" })
  streamProcessorArn?: string;
}
