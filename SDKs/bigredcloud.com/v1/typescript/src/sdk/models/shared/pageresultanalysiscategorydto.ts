import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnalysisCategoryDto } from "./analysiscategorydto";


export class PageResultAnalysisCategoryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.AnalysisCategoryDto })
  items?: AnalysisCategoryDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
