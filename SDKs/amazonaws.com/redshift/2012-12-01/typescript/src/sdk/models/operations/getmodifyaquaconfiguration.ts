import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyAquaConfigurationActionEnum {
    ModifyAquaConfiguration = "ModifyAquaConfiguration"
}

export enum GetModifyAquaConfigurationAquaConfigurationStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Auto = "auto"
}

export enum GetModifyAquaConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyAquaConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyAquaConfigurationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AquaConfigurationStatus" })
  aquaConfigurationStatus?: GetModifyAquaConfigurationAquaConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyAquaConfigurationVersionEnum;
}


export class GetModifyAquaConfigurationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetModifyAquaConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyAquaConfigurationQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyAquaConfigurationHeaders;
}


export class GetModifyAquaConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
