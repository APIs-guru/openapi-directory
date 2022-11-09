import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Session
/** 
 * Session
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=clientCode" })
  clientCode: string;

  @Metadata({ data: "json, name=clientEngine" })
  clientEngine: string;

  @Metadata({ data: "json, name=clientEngineVersion" })
  clientEngineVersion: string;

  @Metadata({ data: "json, name=clientName" })
  clientName: string;

  @Metadata({ data: "json, name=clientType" })
  clientType: string;

  @Metadata({ data: "json, name=clientVersion" })
  clientVersion: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode: string;

  @Metadata({ data: "json, name=countryName" })
  countryName: string;

  @Metadata({ data: "json, name=current" })
  current: boolean;

  @Metadata({ data: "json, name=deviceBrand" })
  deviceBrand: string;

  @Metadata({ data: "json, name=deviceModel" })
  deviceModel: string;

  @Metadata({ data: "json, name=deviceName" })
  deviceName: string;

  @Metadata({ data: "json, name=expire" })
  expire: number;

  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=osCode" })
  osCode: string;

  @Metadata({ data: "json, name=osName" })
  osName: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion: string;

  @Metadata({ data: "json, name=provider" })
  provider: string;

  @Metadata({ data: "json, name=providerToken" })
  providerToken: string;

  @Metadata({ data: "json, name=providerUid" })
  providerUid: string;

  @Metadata({ data: "json, name=userId" })
  userId: string;
}
