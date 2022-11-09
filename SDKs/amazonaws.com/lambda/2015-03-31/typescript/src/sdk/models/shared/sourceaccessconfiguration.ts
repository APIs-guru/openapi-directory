import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceAccessTypeEnum } from "./sourceaccesstypeenum";


// SourceAccessConfiguration
/** 
 * To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.
**/
export class SourceAccessConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: SourceAccessTypeEnum;

  @Metadata({ data: "json, name=URI" })
  uri?: string;
}
