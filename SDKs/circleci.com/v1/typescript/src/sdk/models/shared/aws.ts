import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Aws extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keypair" })
  keypair?: string;
}
