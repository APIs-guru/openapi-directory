import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OwnerTypeDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ownerTypeGroupId" })
  ownerTypeGroupId?: number;
}
