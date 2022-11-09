import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyGeneralDetaisViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=companyAddresses" })
  companyAddresses?: string[];

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=currencyDescription" })
  currencyDescription?: string;

  @Metadata({ data: "json, name=currencyId" })
  currencyId?: number;

  @Metadata({ data: "json, name=currentcySymbol" })
  currentcySymbol?: string;

  @Metadata({ data: "json, name=emails" })
  emails?: string[];

  @Metadata({ data: "json, name=faxes" })
  faxes?: string[];

  @Metadata({ data: "json, name=phones" })
  phones?: string[];

  @Metadata({ data: "json, name=regionDescription" })
  regionDescription?: string;

  @Metadata({ data: "json, name=regionId" })
  regionId?: number;

  @Metadata({ data: "json, name=vatReg" })
  vatReg?: string;
}
