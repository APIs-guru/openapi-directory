import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OAuthAuthorizationUserAgentCategoryEnum {
    Browser = "browser"
,    Native = "native"
,    Unknown = "unknown"
}


// OAuthAuthorization
/** 
 * OAuth authorization
**/
export class OAuthAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientName" })
  clientName: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isCurrentAuthorization" })
  isCurrentAuthorization?: boolean;

  @Metadata({ data: "json, name=isStandard" })
  isStandard?: boolean;

  @Metadata({ data: "json, name=usedAt" })
  usedAt?: Date;

  @Metadata({ data: "json, name=userAgentCategory" })
  userAgentCategory: OAuthAuthorizationUserAgentCategoryEnum;

  @Metadata({ data: "json, name=userAgentInfo" })
  userAgentInfo?: string;

  @Metadata({ data: "json, name=userAgentOs" })
  userAgentOs?: string;

  @Metadata({ data: "json, name=userAgentType" })
  userAgentType?: string;
}
