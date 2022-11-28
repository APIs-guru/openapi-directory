import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaginationCoverageModeEnum {
    Native = "native",
    Virtual = "virtual"
}


export class PaginationCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit_support" })
  limitSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: PaginationCoverageModeEnum;

  @SpeakeasyMetadata({ data: "json, name=paging_support" })
  pagingSupport?: boolean;
}
