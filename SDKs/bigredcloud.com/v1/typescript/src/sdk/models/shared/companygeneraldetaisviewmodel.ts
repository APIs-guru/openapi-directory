import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyGeneralDetaisViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyAddresses" })
  companyAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyDescription" })
  currencyDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=currentcySymbol" })
  currentcySymbol?: string;

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=faxes" })
  faxes?: string[];

  @SpeakeasyMetadata({ data: "json, name=phones" })
  phones?: string[];

  @SpeakeasyMetadata({ data: "json, name=regionDescription" })
  regionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=regionId" })
  regionId?: number;

  @SpeakeasyMetadata({ data: "json, name=vatReg" })
  vatReg?: string;
}
