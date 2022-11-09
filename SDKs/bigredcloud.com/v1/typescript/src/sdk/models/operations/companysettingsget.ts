import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanySettingsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultCompanySettingDto?: shared.PageResultCompanySettingDto;

  @Metadata()
  statusCode: number;
}
