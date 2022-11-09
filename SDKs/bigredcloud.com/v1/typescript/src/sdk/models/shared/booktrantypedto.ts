import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookTranTypeDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
