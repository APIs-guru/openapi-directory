import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Name } from "./name";


export class DistrictAdmin extends SpeakeasyBase {
  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: Name;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
