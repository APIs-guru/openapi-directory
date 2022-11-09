import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Api2ControllersWebApiMeControllerOption } from "./api2controllerswebapimecontrolleroption";


export class Api2ControllersWebApiMeControllerEatingStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=Options", elemType: shared.Api2ControllersWebApiMeControllerOption })
  options?: Api2ControllersWebApiMeControllerOption[];
}
