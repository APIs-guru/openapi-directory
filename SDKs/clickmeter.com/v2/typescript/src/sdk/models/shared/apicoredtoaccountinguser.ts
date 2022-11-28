import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoAccountingUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boGoVal, form, name=boGoVal;" })
  boGoVal?: string;

  @SpeakeasyMetadata({ data: "json, name=bonusClicks, form, name=bonusClicks;" })
  bonusClicks?: number;

  @SpeakeasyMetadata({ data: "json, name=companyName, form, name=companyName;" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyRole, form, name=companyRole;" })
  companyRole?: string;

  @SpeakeasyMetadata({ data: "json, name=email, form, name=email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName, form, name=firstName;" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName, form, name=lastName;" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone, form, name=phone;" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=redirectOnly, form, name=redirectOnly;" })
  redirectOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrationDate, form, name=registrationDate;" })
  registrationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=timeframeMinDate, form, name=timeframeMinDate;" })
  timeframeMinDate?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone, form, name=timezone;" })
  timezone?: number;

  @SpeakeasyMetadata({ data: "json, name=timezonename, form, name=timezonename;" })
  timezonename?: string;
}
