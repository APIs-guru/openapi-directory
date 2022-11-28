import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PredictInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @SpeakeasyMetadata({ data: "json, name=PredictEndpoint" })
  predictEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=Record" })
  record: Map<string, string>;
}
