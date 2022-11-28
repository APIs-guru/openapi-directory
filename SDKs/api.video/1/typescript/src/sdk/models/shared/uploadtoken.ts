import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}
