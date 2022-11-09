import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioPersonaEnum } from "./studiopersonaenum";


export class NewStudioMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=persona" })
  persona: StudioPersonaEnum;

  @Metadata({ data: "json, name=principalId" })
  principalId: string;
}
