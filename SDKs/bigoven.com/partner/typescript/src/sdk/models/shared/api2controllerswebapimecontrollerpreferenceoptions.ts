import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Api2ControllersWebApiMeControllerEatingStyle } from "./api2controllerswebapimecontrollereatingstyle";



export class Api2ControllersWebApiMeControllerPreferenceOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EatingStyle" })
  eatingStyle?: Api2ControllersWebApiMeControllerEatingStyle;
}
