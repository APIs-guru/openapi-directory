import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAlgorithmOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmArn" })
  algorithmArn: string;
}
