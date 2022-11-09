import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanySetupConfigGetCompanyOptionsResponse extends SpeakeasyBase {
  @Metadata()
  companyOptionDto?: shared.CompanyOptionDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
