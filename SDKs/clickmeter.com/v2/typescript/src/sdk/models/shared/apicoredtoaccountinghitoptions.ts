import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoAccountingHitOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hideReferrer, form, name=hideReferrer;" })
  hideReferrer?: boolean;
}
