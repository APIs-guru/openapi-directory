import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OwnerTypeDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=ownerTypeGroupId" })
  ownerTypeGroupId?: number;
}
