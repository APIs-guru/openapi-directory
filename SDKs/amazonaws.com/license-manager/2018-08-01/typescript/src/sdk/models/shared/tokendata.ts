import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TokenData
/** 
 * Describes a token.
**/
export class TokenData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn?: string;

  @Metadata({ data: "json, name=RoleArns" })
  roleArns?: string[];

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=TokenId" })
  tokenId?: string;

  @Metadata({ data: "json, name=TokenProperties" })
  tokenProperties?: string[];

  @Metadata({ data: "json, name=TokenType" })
  tokenType?: string;
}
