import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Credentials } from "./credentials";
import { Name } from "./name";


export class SchoolAdmin extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials" })
  credentials?: Credentials;

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: Name;

  @Metadata({ data: "json, name=schools" })
  schools?: string[];

  @Metadata({ data: "json, name=staff_id" })
  staffId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
