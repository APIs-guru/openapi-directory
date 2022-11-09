import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BookTranTypeDto } from "./booktrantypedto";


export class PageResultBookTranTypeDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.BookTranTypeDto })
  items?: BookTranTypeDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
