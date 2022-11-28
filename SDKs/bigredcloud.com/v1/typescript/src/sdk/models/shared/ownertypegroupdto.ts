import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OwnerTypeGroupDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
