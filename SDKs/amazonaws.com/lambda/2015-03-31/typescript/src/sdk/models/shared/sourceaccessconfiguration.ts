import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceAccessTypeEnum } from "./sourceaccesstypeenum";



// SourceAccessConfiguration
/** 
 * To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.
**/
export class SourceAccessConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: SourceAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=URI" })
  uri?: string;
}
