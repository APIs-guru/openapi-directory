import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WorkTypeCreateApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Title, form, name=Title;" })
  title?: string;
}
