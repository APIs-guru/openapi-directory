import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProductAsAdminInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SourcePortfolioId" })
  sourcePortfolioId?: string;
}
