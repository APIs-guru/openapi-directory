import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LogicalNetworkInterfaceNetworkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Client = "CLIENT",
    Private = "PRIVATE"
}


// LogicalNetworkInterface
/** 
 * Each logical network interface is effectively a network and IP pair.
**/
export class LogicalNetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultGateway" })
  defaultGateway?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkType" })
  networkType?: LogicalNetworkInterfaceNetworkTypeEnum;
}
