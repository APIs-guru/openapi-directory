import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Testers extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleGroups" })
  googleGroups?: string[];
}
