import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AlgorithmVersionInfoStatusEnum {
    Required = "REQUIRED",
    Discouraged = "DISCOURAGED"
}
/**
 * Algorithm information
**/
export declare class AlgorithmVersionInfo extends SpeakeasyBase {
    description: string;
    status: AlgorithmVersionInfoStatusEnum;
    version: string;
}
