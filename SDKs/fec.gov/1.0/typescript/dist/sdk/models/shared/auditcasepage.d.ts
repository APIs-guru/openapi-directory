import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { AuditCase } from "./auditcase";
export declare class AuditCasePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: AuditCase[];
}
