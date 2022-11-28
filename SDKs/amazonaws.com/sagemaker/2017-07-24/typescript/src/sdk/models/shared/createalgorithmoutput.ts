import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAlgorithmOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmArn" })
  algorithmArn: string;
}
