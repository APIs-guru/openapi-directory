import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamProcessorInput } from "./streamprocessorinput";
import { StreamProcessorOutput } from "./streamprocessoroutput";
import { StreamProcessorSettings } from "./streamprocessorsettings";
import { StreamProcessorStatusEnum } from "./streamprocessorstatusenum";


export class DescribeStreamProcessorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=Input" })
  input?: StreamProcessorInput;

  @Metadata({ data: "json, name=LastUpdateTimestamp" })
  lastUpdateTimestamp?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Output" })
  output?: StreamProcessorOutput;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=Settings" })
  settings?: StreamProcessorSettings;

  @Metadata({ data: "json, name=Status" })
  status?: StreamProcessorStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=StreamProcessorArn" })
  streamProcessorArn?: string;
}
