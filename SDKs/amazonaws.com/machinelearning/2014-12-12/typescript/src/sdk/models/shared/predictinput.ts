import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PredictInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @Metadata({ data: "json, name=PredictEndpoint" })
  predictEndpoint: string;

  @Metadata({ data: "json, name=Record" })
  record: Map<string, string>;
}
