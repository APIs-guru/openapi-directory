import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AcudfValueDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=userDefinedFieldId" })
  userDefinedFieldId?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
