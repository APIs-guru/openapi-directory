import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Syslog event information
**/
export declare class SyslogEvent extends SpeakeasyBase {
    attribute1?: string;
    attribute2?: string;
    attribute3?: string;
    authParentSource?: string;
    authParentTarget?: string;
    customerId?: number;
    id: number;
    message: string;
    objectId1?: number;
    objectId2?: number;
    objectName1?: string;
    objectName2?: string;
    objectType1?: number;
    objectType2?: number;
    operationId?: number;
    operationName?: string;
    status?: number;
    time: Date;
    userClient?: string;
    userId: number;
    userIp?: string;
    userName?: string;
}
