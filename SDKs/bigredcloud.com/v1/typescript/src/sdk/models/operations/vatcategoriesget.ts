import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatCategoriesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultVatCategoryDto?: shared.PageResultVatCategoryDto;

  @Metadata()
  statusCode: number;
}
