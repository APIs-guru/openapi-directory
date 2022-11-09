import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LogicalNetworkInterfaceNetworkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Client = "CLIENT"
,    Private = "PRIVATE"
}


// LogicalNetworkInterface
/** 
 * Each logical network interface is effectively a network and IP pair.
**/
export class LogicalNetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultGateway" })
  defaultGateway?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=networkType" })
  networkType?: LogicalNetworkInterfaceNetworkTypeEnum;
}
