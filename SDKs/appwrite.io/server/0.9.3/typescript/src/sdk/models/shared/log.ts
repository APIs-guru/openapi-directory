import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Log
/** 
 * Log
**/
export class Log extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientCode" })
  clientCode: string;

  @SpeakeasyMetadata({ data: "json, name=clientEngine" })
  clientEngine: string;

  @SpeakeasyMetadata({ data: "json, name=clientEngineVersion" })
  clientEngineVersion: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName: string;

  @SpeakeasyMetadata({ data: "json, name=clientType" })
  clientType: string;

  @SpeakeasyMetadata({ data: "json, name=clientVersion" })
  clientVersion: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=countryName" })
  countryName: string;

  @SpeakeasyMetadata({ data: "json, name=deviceBrand" })
  deviceBrand: string;

  @SpeakeasyMetadata({ data: "json, name=deviceModel" })
  deviceModel: string;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=osCode" })
  osCode: string;

  @SpeakeasyMetadata({ data: "json, name=osName" })
  osName: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: number;
}
