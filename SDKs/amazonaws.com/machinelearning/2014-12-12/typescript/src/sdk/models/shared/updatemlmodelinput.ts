import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMlModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @SpeakeasyMetadata({ data: "json, name=MLModelName" })
  mlModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ScoreThreshold" })
  scoreThreshold?: number;
}
