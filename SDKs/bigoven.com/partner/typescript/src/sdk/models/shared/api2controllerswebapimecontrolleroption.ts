import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2ControllersWebApiMeControllerOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;
}
