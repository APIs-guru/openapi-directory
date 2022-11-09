import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanySetupConfigGetResponse extends SpeakeasyBase {
  @Metadata()
  companySetupConfigViewModel?: shared.CompanySetupConfigViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
