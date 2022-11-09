import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "json, name=bits" })
  bits?: number;
}
