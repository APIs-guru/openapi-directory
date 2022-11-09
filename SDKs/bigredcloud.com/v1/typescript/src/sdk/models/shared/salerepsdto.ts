import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SaleRepsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=companyId" })
  companyId?: number;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp?: string;
}
