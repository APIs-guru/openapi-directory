import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerNetworkTemplate } from "./servernetworktemplate";


// OsImage
/** 
 * Operation System image.
**/
export class OsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicableInstanceTypes" })
  applicableInstanceTypes?: string[];

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=supportedNetworkTemplates", elemType: shared.ServerNetworkTemplate })
  supportedNetworkTemplates?: ServerNetworkTemplate[];
}
