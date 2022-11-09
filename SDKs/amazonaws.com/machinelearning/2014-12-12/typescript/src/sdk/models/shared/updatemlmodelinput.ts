import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMlModelInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @Metadata({ data: "json, name=MLModelName" })
  mlModelName?: string;

  @Metadata({ data: "json, name=ScoreThreshold" })
  scoreThreshold?: number;
}
