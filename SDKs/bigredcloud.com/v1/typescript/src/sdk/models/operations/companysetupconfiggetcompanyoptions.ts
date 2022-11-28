import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanySetupConfigGetCompanyOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyOptionDto?: shared.CompanyOptionDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
