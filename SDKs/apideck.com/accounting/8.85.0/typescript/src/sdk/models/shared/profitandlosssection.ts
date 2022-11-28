import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfitAndLossRecord } from "./profitandlossrecord";



export class ProfitAndLossSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=records" })
  records?: any[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
