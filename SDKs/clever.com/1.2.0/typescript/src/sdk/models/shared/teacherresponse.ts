import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Teacher } from "./teacher";



export class TeacherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Teacher;
}
