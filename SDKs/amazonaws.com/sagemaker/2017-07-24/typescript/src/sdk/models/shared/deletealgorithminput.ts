import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAlgorithmInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;
}
