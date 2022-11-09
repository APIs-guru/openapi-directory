import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProfitAndLossSection } from "./profitandlosssection";
import { ProfitAndLossRecord } from "./profitandlossrecord";


export class ProfitAndLossSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=records" })
  records?: any[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
