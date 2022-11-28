import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePortfolioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
