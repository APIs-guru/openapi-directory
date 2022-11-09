import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyNotification } from "./propertynotification";
import { PropertyType } from "./propertytype";


// Property
/** 
 * Contains asset property information.
**/
export class Property extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType: PropertyDataTypeEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=notification" })
  notification?: PropertyNotification;

  @Metadata({ data: "json, name=type" })
  type?: PropertyType;

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
