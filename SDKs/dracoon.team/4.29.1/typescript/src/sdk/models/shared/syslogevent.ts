import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SyslogEvent
/** 
 * Syslog event information
**/
export class SyslogEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute1" })
  attribute1?: string;

  @SpeakeasyMetadata({ data: "json, name=attribute2" })
  attribute2?: string;

  @SpeakeasyMetadata({ data: "json, name=attribute3" })
  attribute3?: string;

  @SpeakeasyMetadata({ data: "json, name=authParentSource" })
  authParentSource?: string;

  @SpeakeasyMetadata({ data: "json, name=authParentTarget" })
  authParentTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=objectId1" })
  objectId1?: number;

  @SpeakeasyMetadata({ data: "json, name=objectId2" })
  objectId2?: number;

  @SpeakeasyMetadata({ data: "json, name=objectName1" })
  objectName1?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName2" })
  objectName2?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType1" })
  objectType1?: number;

  @SpeakeasyMetadata({ data: "json, name=objectType2" })
  objectType2?: number;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: number;

  @SpeakeasyMetadata({ data: "json, name=operationName" })
  operationName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: Date;

  @SpeakeasyMetadata({ data: "json, name=userClient" })
  userClient?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: number;

  @SpeakeasyMetadata({ data: "json, name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
