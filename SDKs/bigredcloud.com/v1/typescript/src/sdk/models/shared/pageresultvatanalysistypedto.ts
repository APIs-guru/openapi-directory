import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VatAnalysisTypeDto } from "./vatanalysistypedto";


export class PageResultVatAnalysisTypeDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.VatAnalysisTypeDto })
  items?: VatAnalysisTypeDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
