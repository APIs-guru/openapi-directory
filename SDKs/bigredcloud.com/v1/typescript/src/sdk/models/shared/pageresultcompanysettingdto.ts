import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompanySettingDto } from "./companysettingdto";



export class PageResultCompanySettingDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: CompanySettingDto })
  items?: CompanySettingDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
