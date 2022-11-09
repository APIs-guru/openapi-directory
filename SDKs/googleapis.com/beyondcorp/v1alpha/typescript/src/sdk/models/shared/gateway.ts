import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    GcpRegionalMig = "GCP_REGIONAL_MIG"
}


// Gateway
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class Gateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: GatewayTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=userPort" })
  userPort?: number;
}
