import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface } from "./googlecloudbaremetalsolutionv2servernetworktemplatelogicalinterface";


// ServerNetworkTemplate
/** 
 * Network template.
**/
export class ServerNetworkTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicableInstanceTypes" })
  applicableInstanceTypes?: string[];

  @Metadata({ data: "json, name=logicalInterfaces", elemType: shared.GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface })
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
