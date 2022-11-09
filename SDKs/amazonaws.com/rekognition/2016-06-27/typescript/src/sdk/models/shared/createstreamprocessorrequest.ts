import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamProcessorInput } from "./streamprocessorinput";
import { StreamProcessorOutput } from "./streamprocessoroutput";
import { StreamProcessorSettings } from "./streamprocessorsettings";


export class CreateStreamProcessorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Input" })
  input: StreamProcessorInput;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Output" })
  output: StreamProcessorOutput;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=Settings" })
  settings: StreamProcessorSettings;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
