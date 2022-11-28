import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerNetworkTemplate } from "./servernetworktemplate";



// OsImage
/** 
 * Operation System image.
**/
export class OsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicableInstanceTypes" })
  applicableInstanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedNetworkTemplates", elemType: ServerNetworkTemplate })
  supportedNetworkTemplates?: ServerNetworkTemplate[];
}
