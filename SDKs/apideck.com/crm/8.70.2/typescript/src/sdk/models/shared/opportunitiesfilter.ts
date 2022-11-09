import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OpportunitiesFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=monetary_amount" })
  monetaryAmount?: number;

  @Metadata({ data: "queryParam, name=status" })
  status?: string;

  @Metadata({ data: "queryParam, name=title" })
  title?: string;

  @Metadata({ data: "queryParam, name=win_probability" })
  winProbability?: number;
}
