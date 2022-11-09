import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";


export class GetCategoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Category;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
