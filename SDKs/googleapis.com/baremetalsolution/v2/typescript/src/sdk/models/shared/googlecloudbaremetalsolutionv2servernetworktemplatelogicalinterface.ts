import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum {
    InterfaceTypeUnspecified = "INTERFACE_TYPE_UNSPECIFIED"
,    Bond = "BOND"
,    Nic = "NIC"
}


// GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface
/** 
 * Logical interface.
**/
export class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum;
}
