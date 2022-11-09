import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoRetargetingRetargetingScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @Metadata({ data: "json, name=script, form, name=script;" })
  script?: string;
}
