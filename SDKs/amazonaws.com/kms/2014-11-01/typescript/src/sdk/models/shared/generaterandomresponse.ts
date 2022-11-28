import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateRandomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Plaintext" })
  plaintext?: string;
}
