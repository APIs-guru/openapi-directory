import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContainersGroupsPostCreatedInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Warnings" })
  warnings?: string[];
}
