import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterprisePublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=key_id" })
  keyId?: string;

  @Metadata({ data: "json, name=repository_id" })
  repositoryId?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}
