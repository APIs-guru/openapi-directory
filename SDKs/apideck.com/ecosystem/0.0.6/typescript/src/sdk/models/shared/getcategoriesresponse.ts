import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetCategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Category })
  data: Category[];

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
