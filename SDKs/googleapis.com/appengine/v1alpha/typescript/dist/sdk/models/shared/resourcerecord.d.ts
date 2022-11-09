import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ResourceRecordTypeEnum {
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
