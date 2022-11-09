import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSavingsPlanResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=savingsPlanId" })
  savingsPlanId?: string;
}
