import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConnectionImportDataCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=issued_at" })
  issuedAt?: Date;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken: string;
}


export class ConnectionImportData extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials" })
  credentials?: ConnectionImportDataCredentials;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=settings" })
  settings?: Map<string, any>;
}
