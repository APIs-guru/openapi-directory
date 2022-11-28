import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSavingsPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=savingsPlanId" })
  savingsPlanId?: string;
}
