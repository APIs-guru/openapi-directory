import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoAccountingUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=boGoVal, form, name=boGoVal;" })
  boGoVal?: string;

  @Metadata({ data: "json, name=bonusClicks, form, name=bonusClicks;" })
  bonusClicks?: number;

  @Metadata({ data: "json, name=companyName, form, name=companyName;" })
  companyName?: string;

  @Metadata({ data: "json, name=companyRole, form, name=companyRole;" })
  companyRole?: string;

  @Metadata({ data: "json, name=email, form, name=email;" })
  email?: string;

  @Metadata({ data: "json, name=firstName, form, name=firstName;" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName, form, name=lastName;" })
  lastName?: string;

  @Metadata({ data: "json, name=phone, form, name=phone;" })
  phone?: string;

  @Metadata({ data: "json, name=redirectOnly, form, name=redirectOnly;" })
  redirectOnly?: boolean;

  @Metadata({ data: "json, name=registrationDate, form, name=registrationDate;" })
  registrationDate?: string;

  @Metadata({ data: "json, name=timeframeMinDate, form, name=timeframeMinDate;" })
  timeframeMinDate?: string;

  @Metadata({ data: "json, name=timezone, form, name=timezone;" })
  timezone?: number;

  @Metadata({ data: "json, name=timezonename, form, name=timezonename;" })
  timezonename?: string;
}
