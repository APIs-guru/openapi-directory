import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateRandomResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Plaintext" })
  plaintext?: string;
}
