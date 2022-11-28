import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpRegionalMig = "GCP_REGIONAL_MIG"
}


// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appGateway" })
  appGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum;
}


// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appGateway" })
  appGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=ingressPort" })
  ingressPort?: number;

  @SpeakeasyMetadata({ data: "json, name=l7psc" })
  l7psc?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
