import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}
