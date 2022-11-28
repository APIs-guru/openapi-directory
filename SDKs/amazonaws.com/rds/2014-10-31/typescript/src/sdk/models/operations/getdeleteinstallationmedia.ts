import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteInstallationMediaActionEnum {
    DeleteInstallationMedia = "DeleteInstallationMedia"
}

export enum GetDeleteInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteInstallationMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteInstallationMediaActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstallationMediaId" })
  installationMediaId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteInstallationMediaVersionEnum;
}


export class GetDeleteInstallationMediaHeaders extends SpeakeasyBase {
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


export class GetDeleteInstallationMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteInstallationMediaQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteInstallationMediaHeaders;
}


export class GetDeleteInstallationMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
