import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartProjectVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MinInferenceUnits" })
  minInferenceUnits: number;

  @SpeakeasyMetadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn: string;
}
