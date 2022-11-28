import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContainersGroupsPostCreatedInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Warnings" })
  warnings?: string[];
}
