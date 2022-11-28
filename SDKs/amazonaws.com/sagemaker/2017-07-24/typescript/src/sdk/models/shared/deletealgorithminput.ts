import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAlgorithmInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;
}
