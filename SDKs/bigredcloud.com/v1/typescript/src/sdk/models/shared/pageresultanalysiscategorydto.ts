import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisCategoryDto } from "./analysiscategorydto";



export class PageResultAnalysisCategoryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AnalysisCategoryDto })
  items?: AnalysisCategoryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
