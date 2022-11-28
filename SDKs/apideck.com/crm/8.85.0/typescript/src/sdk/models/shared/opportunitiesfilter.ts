import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OpportunitiesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=monetary_amount" })
  monetaryAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=win_probability" })
  winProbability?: number;
}
