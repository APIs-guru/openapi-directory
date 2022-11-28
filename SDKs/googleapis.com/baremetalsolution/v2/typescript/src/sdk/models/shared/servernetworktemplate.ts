import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface } from "./googlecloudbaremetalsolutionv2servernetworktemplatelogicalinterface";



// ServerNetworkTemplate
/** 
 * Network template.
**/
export class ServerNetworkTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicableInstanceTypes" })
  applicableInstanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface })
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
