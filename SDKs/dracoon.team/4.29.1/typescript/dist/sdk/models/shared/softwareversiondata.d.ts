import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Software version information
**/
export declare class SoftwareVersionData extends SpeakeasyBase {
    buildDate: Date;
    isDracoonCloud?: boolean;
    restApiVersion: string;
    scmRevisionNumber: string;
    sdsServerVersion: string;
}
