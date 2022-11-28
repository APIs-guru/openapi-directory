import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum {
    InterfaceTypeUnspecified = "INTERFACE_TYPE_UNSPECIFIED",
    Bond = "BOND",
    Nic = "NIC"
}


// GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface
/** 
 * Logical interface.
**/
export class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum;
}
