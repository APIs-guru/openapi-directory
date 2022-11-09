import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePortfolioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;
}
