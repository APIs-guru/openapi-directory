import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanySettingsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultCompanySettingDto?: shared.PageResultCompanySettingDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
