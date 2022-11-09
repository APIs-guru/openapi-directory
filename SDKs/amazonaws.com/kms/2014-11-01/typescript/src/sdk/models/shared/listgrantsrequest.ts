import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListGrantsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantId" })
  grantId?: string;

  @Metadata({ data: "json, name=GranteePrincipal" })
  granteePrincipal?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
