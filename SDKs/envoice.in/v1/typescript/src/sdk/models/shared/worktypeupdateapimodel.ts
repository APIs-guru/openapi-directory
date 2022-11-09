import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WorkTypeUpdateApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Title, form, name=Title;" })
  title?: string;
}
