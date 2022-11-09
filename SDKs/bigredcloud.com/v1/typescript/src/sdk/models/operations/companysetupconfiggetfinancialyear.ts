import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanySetupConfigGetFinancialYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  financialYearDto?: shared.FinancialYearDto;

  @Metadata()
  statusCode: number;
}
