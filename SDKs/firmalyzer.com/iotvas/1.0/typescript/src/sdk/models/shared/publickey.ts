import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=bits" })
  bits?: number;
}
