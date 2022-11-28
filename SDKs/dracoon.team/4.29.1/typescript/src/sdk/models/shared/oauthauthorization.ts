import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OAuthAuthorizationUserAgentCategoryEnum {
    Browser = "browser",
    Native = "native",
    Unknown = "unknown"
}


// OAuthAuthorization
/** 
 * OAuth authorization
**/
export class OAuthAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isCurrentAuthorization" })
  isCurrentAuthorization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isStandard" })
  isStandard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usedAt" })
  usedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=userAgentCategory" })
  userAgentCategory: OAuthAuthorizationUserAgentCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=userAgentInfo" })
  userAgentInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgentOs" })
  userAgentOs?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgentType" })
  userAgentType?: string;
}
