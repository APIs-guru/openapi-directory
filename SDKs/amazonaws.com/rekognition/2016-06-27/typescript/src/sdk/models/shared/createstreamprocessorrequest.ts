import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamProcessorInput } from "./streamprocessorinput";
import { StreamProcessorOutput } from "./streamprocessoroutput";
import { StreamProcessorSettings } from "./streamprocessorsettings";



export class CreateStreamProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Input" })
  input: StreamProcessorInput;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Output" })
  output: StreamProcessorOutput;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings: StreamProcessorSettings;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
