import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyReferenceSettingViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditorsJournal" })
  creditorsJournal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=debtorsJournal" })
  debtorsJournal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=purchases" })
  purchases?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sales" })
  sales?: boolean;
}
