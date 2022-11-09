import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteInstallationMediaActionEnum {
    DeleteInstallationMedia = "DeleteInstallationMedia"
}

export enum GetDeleteInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteInstallationMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteInstallationMediaActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstallationMediaId" })
  installationMediaId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteInstallationMediaVersionEnum;
}


export class GetDeleteInstallationMediaHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDeleteInstallationMediaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteInstallationMediaQueryParams;

  @Metadata()
  headers: GetDeleteInstallationMediaHeaders;
}


export class GetDeleteInstallationMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
