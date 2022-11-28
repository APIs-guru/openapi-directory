import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
import { Name } from "./name";



export class Teacher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: Credentials;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;

  @SpeakeasyMetadata({ data: "json, name=schools" })
  schools?: string[];

  @SpeakeasyMetadata({ data: "json, name=sis_id" })
  sisId?: string;

  @SpeakeasyMetadata({ data: "json, name=state_id" })
  stateId?: string;

  @SpeakeasyMetadata({ data: "json, name=teacher_number" })
  teacherNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
