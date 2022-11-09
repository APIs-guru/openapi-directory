import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompanySettingDto } from "./companysettingdto";


export class PageResultCompanySettingDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.CompanySettingDto })
  items?: CompanySettingDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
