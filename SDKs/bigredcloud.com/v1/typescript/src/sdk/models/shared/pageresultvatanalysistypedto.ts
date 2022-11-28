import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VatAnalysisTypeDto } from "./vatanalysistypedto";



export class PageResultVatAnalysisTypeDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: VatAnalysisTypeDto })
  items?: VatAnalysisTypeDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
