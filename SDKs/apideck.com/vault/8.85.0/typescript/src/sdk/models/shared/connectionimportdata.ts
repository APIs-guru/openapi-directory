import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConnectionImportDataCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=issued_at" })
  issuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken: string;
}


export class ConnectionImportData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: ConnectionImportDataCredentials;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Map<string, any>;
}
