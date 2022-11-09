import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalysisCategoriesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultAnalysisCategoryDto?: shared.PageResultAnalysisCategoryDto;

  @Metadata()
  statusCode: number;
}
