import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserDefinedFieldDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryTypeId" })
  categoryTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=orderIndex" })
  orderIndex?: number;
}
