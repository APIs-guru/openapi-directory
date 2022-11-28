import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyNotification } from "./propertynotification";
import { PropertyType } from "./propertytype";



// Property
/** 
 * Contains asset property information.
**/
export class Property extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: PropertyDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: PropertyNotification;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PropertyType;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
