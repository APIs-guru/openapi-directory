import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=ExpirationInDays" })
  expirationInDays?: number;

  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @Metadata({ data: "json, name=RoleArns" })
  roleArns?: string[];

  @Metadata({ data: "json, name=TokenProperties" })
  tokenProperties?: string[];
}
