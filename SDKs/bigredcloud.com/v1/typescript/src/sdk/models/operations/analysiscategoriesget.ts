import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AnalysisCategoriesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultAnalysisCategoryDto?: shared.PageResultAnalysisCategoryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
