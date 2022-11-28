import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BookTranTypeDto } from "./booktrantypedto";



export class PageResultBookTranTypeDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: BookTranTypeDto })
  items?: BookTranTypeDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
