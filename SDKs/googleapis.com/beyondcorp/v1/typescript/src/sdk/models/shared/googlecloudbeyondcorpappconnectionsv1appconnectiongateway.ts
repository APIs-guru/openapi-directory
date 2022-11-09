import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    GcpRegionalMig = "GCP_REGIONAL_MIG"
}


// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway
/** 
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=appGateway" })
  appGateway?: string;

  @Metadata({ data: "json, name=ingressPort" })
  ingressPort?: number;

  @Metadata({ data: "json, name=l7psc" })
  l7psc?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
