import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProductAsAdminInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SourcePortfolioId" })
  sourcePortfolioId?: string;
}
