import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
import { Name } from "./name";



export class SchoolAdmin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: Credentials;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=schools" })
  schools?: string[];

  @SpeakeasyMetadata({ data: "json, name=staff_id" })
  staffId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
