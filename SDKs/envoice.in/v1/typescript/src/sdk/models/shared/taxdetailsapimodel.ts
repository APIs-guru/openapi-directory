import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Percentage" })
  percentage?: number;
}
