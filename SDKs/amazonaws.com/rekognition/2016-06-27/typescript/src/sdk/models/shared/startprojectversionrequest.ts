import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartProjectVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MinInferenceUnits" })
  minInferenceUnits: number;

  @Metadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn: string;
}
