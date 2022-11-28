import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanySetupConfigGetFinancialYearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  financialYearDto?: shared.FinancialYearDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
