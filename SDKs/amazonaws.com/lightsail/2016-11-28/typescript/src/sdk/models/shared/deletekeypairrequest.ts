import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPairName" })
  keyPairName: string;
}
