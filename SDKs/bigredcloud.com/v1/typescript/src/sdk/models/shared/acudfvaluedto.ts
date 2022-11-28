import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcudfValueDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=userDefinedFieldId" })
  userDefinedFieldId?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
