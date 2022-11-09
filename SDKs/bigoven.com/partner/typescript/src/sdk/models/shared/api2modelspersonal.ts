import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Api2ModelsLocation } from "./api2modelslocation";


// Api2ModelsPersonal
/** 
 * Personal level info -- email, location, etc.
**/
export class Api2ModelsPersonal extends SpeakeasyBase {
  @Metadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @Metadata({ data: "json, name=Location, form, name=Location;" })
  location?: Api2ModelsLocation;
}
