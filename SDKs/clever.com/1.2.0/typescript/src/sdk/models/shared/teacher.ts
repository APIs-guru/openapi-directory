import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Credentials } from "./credentials";
import { Name } from "./name";


export class Teacher extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=credentials" })
  credentials?: Credentials;

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @Metadata({ data: "json, name=name" })
  name?: Name;

  @Metadata({ data: "json, name=school" })
  school?: string;

  @Metadata({ data: "json, name=schools" })
  schools?: string[];

  @Metadata({ data: "json, name=sis_id" })
  sisId?: string;

  @Metadata({ data: "json, name=state_id" })
  stateId?: string;

  @Metadata({ data: "json, name=teacher_number" })
  teacherNumber?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
