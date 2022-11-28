import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TokenData
/** 
 * Describes a token.
**/
export class TokenData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArns" })
  roleArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenId" })
  tokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenProperties" })
  tokenProperties?: string[];

  @SpeakeasyMetadata({ data: "json, name=TokenType" })
  tokenType?: string;
}
