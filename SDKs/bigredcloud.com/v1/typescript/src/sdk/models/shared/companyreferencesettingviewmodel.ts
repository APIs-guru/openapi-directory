import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyReferenceSettingViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=creditorsJournal" })
  creditorsJournal?: boolean;

  @Metadata({ data: "json, name=debtorsJournal" })
  debtorsJournal?: boolean;

  @Metadata({ data: "json, name=purchases" })
  purchases?: boolean;

  @Metadata({ data: "json, name=sales" })
  sales?: boolean;
}
