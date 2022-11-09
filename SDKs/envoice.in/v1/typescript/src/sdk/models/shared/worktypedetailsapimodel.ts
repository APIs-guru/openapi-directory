import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WorkTypeDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
