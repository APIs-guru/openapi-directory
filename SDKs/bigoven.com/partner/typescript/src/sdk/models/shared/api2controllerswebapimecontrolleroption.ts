import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ControllersWebApiMeControllerOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;
}
