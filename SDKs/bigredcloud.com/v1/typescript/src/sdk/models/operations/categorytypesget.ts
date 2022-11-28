import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CategoryTypesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultCategoryTypeDto?: shared.PageResultCategoryTypeDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
