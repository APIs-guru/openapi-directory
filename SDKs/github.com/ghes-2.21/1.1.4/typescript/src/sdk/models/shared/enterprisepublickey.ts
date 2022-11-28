import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterprisePublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=repository_id" })
  repositoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
