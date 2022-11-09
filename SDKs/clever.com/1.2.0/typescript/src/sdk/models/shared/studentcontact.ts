import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StudentContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=phone_type" })
  phoneType?: string;

  @Metadata({ data: "json, name=relationship" })
  relationship?: string;

  @Metadata({ data: "json, name=sis_id" })
  sisId?: string;

  @Metadata({ data: "json, name=student" })
  student?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
