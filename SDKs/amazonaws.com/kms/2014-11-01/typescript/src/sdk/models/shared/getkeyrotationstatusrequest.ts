import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetKeyRotationStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;
}
