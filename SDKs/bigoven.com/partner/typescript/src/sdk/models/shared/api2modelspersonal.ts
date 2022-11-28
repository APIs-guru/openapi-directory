import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Api2ModelsLocation } from "./api2modelslocation";



// Api2ModelsPersonal
/** 
 * Personal level info -- email, location, etc.
**/
export class Api2ModelsPersonal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Location, form, name=Location;" })
  location?: Api2ModelsLocation;
}
