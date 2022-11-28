import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaginationCoverageModeEnum {
    Native = "native",
    Virtual = "virtual"
}
export declare class PaginationCoverage extends SpeakeasyBase {
    limitSupport?: boolean;
    mode?: PaginationCoverageModeEnum;
    pagingSupport?: boolean;
}
