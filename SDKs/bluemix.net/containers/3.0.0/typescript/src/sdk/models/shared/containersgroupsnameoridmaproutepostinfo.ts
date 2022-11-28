import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContainersGroupsNameOrIdMaproutePostInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Warnings" })
  warnings?: string[];
}
