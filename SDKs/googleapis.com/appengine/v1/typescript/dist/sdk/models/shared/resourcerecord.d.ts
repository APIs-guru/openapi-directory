import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ResourceRecordTypeEnum {
    RecordTypeUnspecified = "RECORD_TYPE_UNSPECIFIED",
    A = "A",
    Aaaa = "AAAA",
    Cname = "CNAME"
}
/**
 * A DNS resource record.
**/
export declare class ResourceRecord extends SpeakeasyBase {
    name?: string;
    rrdata?: string;
    type?: ResourceRecordTypeEnum;
}
