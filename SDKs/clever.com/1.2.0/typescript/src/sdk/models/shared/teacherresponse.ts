import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Teacher } from "./teacher";


export class TeacherResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Teacher;
}
