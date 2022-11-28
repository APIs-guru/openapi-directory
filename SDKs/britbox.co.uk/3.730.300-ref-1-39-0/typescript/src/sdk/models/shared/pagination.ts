import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationAuth } from "./paginationauth";
import { PaginationOptions } from "./paginationoptions";



export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorization" })
  authorization?: PaginationAuth;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: PaginationOptions;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}
