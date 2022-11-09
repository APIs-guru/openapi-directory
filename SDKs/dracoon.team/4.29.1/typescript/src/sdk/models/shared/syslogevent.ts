import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SyslogEvent
/** 
 * Syslog event information
**/
export class SyslogEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute1" })
  attribute1?: string;

  @Metadata({ data: "json, name=attribute2" })
  attribute2?: string;

  @Metadata({ data: "json, name=attribute3" })
  attribute3?: string;

  @Metadata({ data: "json, name=authParentSource" })
  authParentSource?: string;

  @Metadata({ data: "json, name=authParentTarget" })
  authParentTarget?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=objectId1" })
  objectId1?: number;

  @Metadata({ data: "json, name=objectId2" })
  objectId2?: number;

  @Metadata({ data: "json, name=objectName1" })
  objectName1?: string;

  @Metadata({ data: "json, name=objectName2" })
  objectName2?: string;

  @Metadata({ data: "json, name=objectType1" })
  objectType1?: number;

  @Metadata({ data: "json, name=objectType2" })
  objectType2?: number;

  @Metadata({ data: "json, name=operationId" })
  operationId?: number;

  @Metadata({ data: "json, name=operationName" })
  operationName?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=time" })
  time: Date;

  @Metadata({ data: "json, name=userClient" })
  userClient?: string;

  @Metadata({ data: "json, name=userId" })
  userId: number;

  @Metadata({ data: "json, name=userIp" })
  userIp?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
