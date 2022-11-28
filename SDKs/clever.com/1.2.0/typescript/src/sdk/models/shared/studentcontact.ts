import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StudentContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_type" })
  phoneType?: string;

  @SpeakeasyMetadata({ data: "json, name=relationship" })
  relationship?: string;

  @SpeakeasyMetadata({ data: "json, name=sis_id" })
  sisId?: string;

  @SpeakeasyMetadata({ data: "json, name=student" })
  student?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
