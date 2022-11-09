import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WorkType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: number;
}
