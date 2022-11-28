import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Testers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleGroups" })
  googleGroups?: string[];
}
