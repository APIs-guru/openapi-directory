import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioPersonaEnum } from "./studiopersonaenum";



export class NewStudioMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=persona" })
  persona: StudioPersonaEnum;

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId: string;
}
