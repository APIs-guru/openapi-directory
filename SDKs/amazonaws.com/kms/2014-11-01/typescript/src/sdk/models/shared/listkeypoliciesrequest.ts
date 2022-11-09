import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListKeyPoliciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
