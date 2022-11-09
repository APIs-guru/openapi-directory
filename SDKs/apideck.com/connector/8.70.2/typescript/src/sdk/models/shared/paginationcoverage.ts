import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PaginationCoverageModeEnum {
    Native = "native"
,    Virtual = "virtual"
}


export class PaginationCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit_support" })
  limitSupport?: boolean;

  @Metadata({ data: "json, name=mode" })
  mode?: PaginationCoverageModeEnum;

  @Metadata({ data: "json, name=paging_support" })
  pagingSupport?: boolean;
}
