import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Aws extends SpeakeasyBase {
  @Metadata({ data: "json, name=keypair" })
  keypair?: string;
}
