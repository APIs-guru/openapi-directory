import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CategoryTypesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultCategoryTypeDto?: shared.PageResultCategoryTypeDto;

  @Metadata()
  statusCode: number;
}
