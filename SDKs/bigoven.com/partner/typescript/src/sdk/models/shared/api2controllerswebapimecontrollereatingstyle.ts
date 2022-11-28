import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Api2ControllersWebApiMeControllerOption } from "./api2controllerswebapimecontrolleroption";



export class Api2ControllersWebApiMeControllerEatingStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Options", elemType: Api2ControllersWebApiMeControllerOption })
  options?: Api2ControllersWebApiMeControllerOption[];
}
