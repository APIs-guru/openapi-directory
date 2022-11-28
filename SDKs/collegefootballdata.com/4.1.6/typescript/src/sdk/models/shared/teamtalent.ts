import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamTalent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;

  @SpeakeasyMetadata({ data: "json, name=talent" })
  talent?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
