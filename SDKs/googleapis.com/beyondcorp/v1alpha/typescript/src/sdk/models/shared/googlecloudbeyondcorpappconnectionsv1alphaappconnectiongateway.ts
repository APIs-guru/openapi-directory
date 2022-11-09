import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    GcpRegionalMig = "GCP_REGIONAL_MIG"
}


// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=appGateway" })
  appGateway?: string;

  @Metadata({ data: "json, name=ingressPort" })
  ingressPort?: number;

  @Metadata({ data: "json, name=l7psc" })
  l7psc?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
