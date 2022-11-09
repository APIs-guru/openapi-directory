import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuoteAcEntriesDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountCode" })
  accountCode?: string;

  @Metadata({ data: "json, name=analysisCategoryId" })
  analysisCategoryId?: number;

  @Metadata({ data: "json, name=companyId" })
  companyId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=quoteProductTranId" })
  quoteProductTranId?: number;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
