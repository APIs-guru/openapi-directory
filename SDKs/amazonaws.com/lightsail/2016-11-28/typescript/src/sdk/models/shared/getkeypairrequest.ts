import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPairName" })
  keyPairName: string;
}
