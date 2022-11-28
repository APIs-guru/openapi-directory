import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpRegionalMig = "GCP_REGIONAL_MIG"
}


// GatewayInput
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class GatewayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GatewayTypeEnum;
}


// Gateway
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class Gateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GatewayTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=userPort" })
  userPort?: number;
}
