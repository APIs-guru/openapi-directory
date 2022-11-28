import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationInDays" })
  expirationInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArns" })
  roleArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=TokenProperties" })
  tokenProperties?: string[];
}
