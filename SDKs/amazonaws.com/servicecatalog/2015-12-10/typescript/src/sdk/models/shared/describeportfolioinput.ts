import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePortfolioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
