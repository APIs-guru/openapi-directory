import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MxRecords } from "./mxrecords";
export declare class Domains extends SpeakeasyBase {
    a?: string[];
    cname?: string[];
    mx?: MxRecords[];
    ns?: string[];
    txt?: string[];
    country?: string;
    createDate?: Date;
    domain?: string;
    isDead?: string;
    updateDate?: Date;
}
