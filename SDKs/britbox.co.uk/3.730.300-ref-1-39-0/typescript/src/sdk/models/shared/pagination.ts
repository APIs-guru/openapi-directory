import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PaginationAuth } from "./paginationauth";
import { PaginationOptions } from "./paginationoptions";


export class Pagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorization" })
  authorization?: PaginationAuth;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=options" })
  options?: PaginationOptions;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=total" })
  total: number;
}
