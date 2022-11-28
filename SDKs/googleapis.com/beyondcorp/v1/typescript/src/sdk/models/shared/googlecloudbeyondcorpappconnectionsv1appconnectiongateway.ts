import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpRegionalMig = "GCP_REGIONAL_MIG"
}


// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appGateway" })
  appGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=ingressPort" })
  ingressPort?: number;

  @SpeakeasyMetadata({ data: "json, name=l7psc" })
  l7psc?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appGateway" })
  appGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
}
